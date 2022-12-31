/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMounted } from "nextra/hooks";
import { useTheme } from "next-themes";
import { useConfig } from "nextra-theme-docs";
import { Footer } from "@components/Footer";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");

export default {
  project: {
    link: "https://github.com/vnodesign/hr.penci.me",
  },
  docsRepositoryBase: "https://github.com/vnodesign/hr.penci.me/blob/production/",
  useNextSeoProps() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const asPath = router.asPath;

    let ogTitle: string;

    if (frontMatter?.title) {
      ogTitle = `${frontMatter.title} - HR Documentation`;
    } else {
      ogTitle = "HR Documentation - Nền tảng chia sẻ các kiến thức và tài liệu";
    }

    let ogUrl: string;

    if (frontMatter?.image) {
      ogUrl = `https://hr.penci.me${frontMatter.image}`;
    } else {
      ogUrl = "https://hr.penci.me/static/documentation-card.png";
    }

    return {
      titleTemplate: ogTitle,
      description:
        frontMatter.description ||
        "Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.",
      canonical: `https://hr.penci.me${asPath}`,
      openGraph: {
        url: `https://hr.penci.me${asPath}`,
        title: frontMatter.title
          ? `${frontMatter.title} - HR Documentation`
          : "HR Documentation",
        description:
          frontMatter.description ||
          "Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.",
        images: [
          {
            url: ogUrl,
            alt: frontMatter.title || "HR Documentation",
            width: "1200",
            height: "630",
          },
        ],
        siteName: "HR Documentation",
        type: asPath === "/" ? "website" : "article",
        locale: "vi_VN",
      },
      facebook: {
        appId: "1031926270674334",
      },
      twitter: {
        handle: "@tuanducdesigner",
        site: "@tuanducdesigner",
        cardType: "summary_large_image",
      },
      additionalMetaTags: [
        { content: "100005485267478", property: "fb:admins" },
        {
          content: frontMatter.title || "HR Documentation",
          name: "twitter:title",
        },
        {
          content:
            frontMatter.description ||
            "Nền tảng chia sẻ các kiến thức và tài liệu về Front End, Back End, Linux và Design dành cho HR.",
          name: "twitter:description",
        },
        { content: ogUrl, name: "twitter:image" },
      ],
    };
  },
  logo: <strong>HR Documentation</strong>,
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  search: {
    emptyResult: (
      <>
        <span className="block p-8 text-sm text-center text-gray-400 select-none">
          Không tìm thấy kết quả cho từ khoá này.
        </span>
      </>
    ),
    placeholder: "Tìm kiếm tài liệu...",
  },
  head() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { resolvedTheme } = useTheme();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mounted = useMounted();
    return (
      <>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="apple-mobile-web-app-title" content="HR Documentation" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="shortcut icon"
          href="/static/favicon.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/static/apple-touch-icon-144x144.png"
        />
        <link rel="prefetch" href="/front-end" as="document" />
        <link rel="prefetch" href="/back-end" as="document" />
        <link rel="prefetch" href="/design" as="document" />
        {mounted && resolvedTheme === "dark" ? (
          <meta name="theme-color" content="#111" />
        ) : (
          <meta name="theme-color" content="#fff" />
        )}
      </>
    );
  },
  navigation: {
    prev: true,
    next: true,
  },
  toc: {
    title: "Mục lục tài liệu",
  },
  editLink: {
    text: "Đóng góp nội dung cho tài liệu này",
  },
  feedback: {
    content: "Đặt câu hỏi cho tài liệu này",
  },
  notFound: {
    content: "Gửi vấn đề về liên kết bị hỏng \u2192",
  },
  serverSideError: {
    content: "Gửi vấn đề về lỗi trong url \u2192",
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      try {
        setDateString(moment(timestamp).fromNow());
      } catch (e) {
        // Ignore errors here; they get the ISO string.
        // At least one person out there has manually misconfigured navigator.language.
      }
    }, [timestamp]);

    return <>Cập nhật lần cuối vào {dateString}</>;
  },
  darkMode: true,
  footer: {
    component: Footer,
  },
};
