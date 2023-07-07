import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-icon-180x180.png"
      />
      <link rel="manifest" href="/images/favicon/manifest.json" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta
        name="theme-color"
        content="#fafafa"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#131313"
        media="(prefers-color-scheme: dark)"
      />
      <body
        className="text-primary bg-primary select-none"
        style={{
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
