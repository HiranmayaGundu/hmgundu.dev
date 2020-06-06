import * as React from "react";
import { useRouter } from "next/router";
import NextHead from "next/head";
interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const HeadComponent: React.FC<HeadProps> = ({ title, description, image }) => {
  const { pathname } = useRouter();
  return (
    <NextHead>
      <title key="title">{title ? `${title}` : "unkown page"}</title>
      <meta name="description" key="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* OPen graph is used for SEO in FB. TIL! */}
      <meta property="og:type" key="og:title" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        property="og:url"
        key="og:url"
        content={`https://hmgundu.dev${pathname}`}
      />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:image"
        key="og:image"
        content={
          image
            ? `https://hmgundu.dev/images/${image}`
            : `https://hmgundu.dev/images/default-seo.png`
        }
      />
      {/* And this stuff is for twitter! */}
      <meta
        property=""
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />

      <meta name="twitter:site" key="twitter:site" content="@hiranmayagundu" />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="@hiranmayagundu"
      />

      <meta
        name="twitter:image"
        key="twitter:image"
        content={
          image
            ? `https://hmgundu.dev/images/${image}`
            : `https://hmgundu.dev/images/default-seo.png`
        }
      />

      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon.ico"
      />
      <link
        rel="icon"
        sizes="192x192"
        href="/static/images/android-chrome-192x192.png"
      />
      <link rel="apple-touch-icon" href="/static/images/apple-touch-icon.png" />
    </NextHead>
  );
};

export default HeadComponent;
