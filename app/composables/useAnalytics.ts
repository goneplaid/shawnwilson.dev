/**
 * Composable for integrating Google Analytics tracking with Nuxt application.
 *
 * Automatically configures Google Analytics 4 (GA4) by injecting the necessary
 * script tags and initialization code into the document head. Uses Nuxt's useHead
 * composable to ensure proper script loading with high priority and error handling.
 */
export const useAnalytics = () => {
  useHead({
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-N0P2XZLHDY",
        async: true,
        tagPosition: "head",
        tagPriority: "high",
        onerror: "console.error('Failed to load Google Analytics script');",
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N0P2XZLHDY');
          `,
        tagPriority: "high",
      },
    ],
  });
};