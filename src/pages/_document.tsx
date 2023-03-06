import { Head, Html, Main, NextScript } from 'next/document'

// Do we have GoogleAnalytics??
export default function Document() {
  const gtag = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    ? `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`
    : ''

  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''

  const SmartLookApi = process.env.NEXT_PUBLIC_SMARTLOOK_API_KEY ?? ''

  return (
    <Html lang="en">
      <Head>
        <script async id="googletagmanager" src={gtag} />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', '${SmartLookApi}', { region: 'eu' });
              `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
