import Script from "next/script";

type GAProp = {
  id: string;
};

export function GAScript({ id }: GAProp) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script
        id="ga-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
