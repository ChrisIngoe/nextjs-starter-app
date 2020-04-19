import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class DocTemplate extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="Description" content="NextJS web application" />
          <link rel="icon" href="static/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
