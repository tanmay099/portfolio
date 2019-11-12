const path = require('path');
//  const { CleanWebpackPlugin  }  = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader']
          },
        
                   {
                     test: /\.css$/,
                     use: [
                       'style-loader',
                       'css-loader',
                     ],
                   },
                   {
                             test: /\.(png|svg|jpg|gif)$/,
                             use: [
                               'file-loader',
                             ],
                           },
                                  {
                                     test: /\.(woff|woff2|eot|ttf|otf)$/,
                                     use: [
                                       'file-loader',
                                     ],
                                   }
            ],
      },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
        'react-dom': '@hot-loader/react-dom',
      }
  },
  plugins: [ 
    //  new CleanWebpackPlugin()
  ]
};