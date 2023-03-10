import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="manifest" href="/manifest.json" /> {/*Linking manifest file to make the web application as an installable PWA*/}
        <meta name="theme-color" content="#2F303A" />
        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/Icons/manifest_icons/MaskableLogo.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="48x48" href="/Icons/manifest_icons/Logo48.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/Icons/manifest_icons/Logo72.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/Icons/manifest_icons/Logo96.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/Icons/manifest_icons/Logo144.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/Icons/manifest_icons/Logo192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
