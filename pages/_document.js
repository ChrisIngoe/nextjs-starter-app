import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class DocTemplate extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Template project</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
