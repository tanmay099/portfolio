/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const withPlugins = require("next-compose-plugins");
const withWorkers = require("@zeit/next-workers");
const withFonts = require("next-fonts");
// const dotenvLoad = require("dotenv-load");
const nextEnv = require("next-env");

// dotenvLoad();

const withNextEnv = nextEnv();

// const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins(
  [withNextEnv, withWorkers, withFonts],

  {
    poweredByHeader: false,
    distDir: "dist",

    webpack(config, { isServer }) {
      const changedConfig = config;
      changedConfig.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ["@svgr/webpack"],
      });
      changedConfig.module.rules.push({
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[ext]?[hash]",
            },
          },
        ],
      });

      changedConfig.resolve.alias = config.resolve.alias || {};

      changedConfig.resolve.alias["@catalogs$"] = path.resolve(
        __dirname,
        `./resources/locales/catalogs.${isServer ? "server" : "client"}.ts`
      );

      return changedConfig;
    },
  }
);
