import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="UpZ3drF2UGTR4z1wDro9As4Tq6pYhyqa4ap_XCvtsaw"
          />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <link rel="manifest" href="/manifest.json" />
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-108857425-2"
          ></script> */}
          {/* <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-108857425-2");
    </script> */}
          {/* <script>
      // Check that service workers are supported
      if ("serviceWorker" in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/service-worker.js", {
            scope: "/",
          });
        });
      }
    </script> */}
          {/* <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <title>Tanmay Sharma</title> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
