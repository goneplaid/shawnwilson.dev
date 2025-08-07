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