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
    </NextHead>
  );
};

export default HeadComponent;
