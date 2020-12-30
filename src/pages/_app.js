import React from "react";
import "../../public/assets/css/style.css";
import "../../public/assets/css/index.css";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
