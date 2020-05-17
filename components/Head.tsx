import * as React from "react";
import { useRouter } from "next/router";
import NextHead from "next/head";
interface HeadProps {
  title?: string;
  description?: string;
}

const HeadComponent: React.FC<HeadProps> = (props) => {
  const { pathname } = useRouter();
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title key="title">
        {props.title ? `${props.title}` : "unkown page"}
      </title>
      <meta name="description" key="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" key="og:title" content="website" />
      <meta
        property="og:description"
        key="og:description"
        content={props.description}
      />
      <meta property="og:title" content={props.title} key="og:title" />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="og:url"
        key="og:url"
        content={`https://hmgundu.dev${pathname}`}
      />
      <meta name="twitter:site" key="twitter:site" content="@hiranmayagundu" />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="@hiranmayagundu"
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
