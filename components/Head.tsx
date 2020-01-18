import React from "react";
import NextHead from "next/head";

interface HeadProps {
  title: string;
  description: string;
}

const HeadComponent: React.FC<HeadProps> = props => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title ? `${props.title}` : "unkown page"}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
