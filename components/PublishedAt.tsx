import React from "react";
import Link from "./Link";
import P from "./Paragraph";
import { parse, format } from "date-fns";
import { textColor } from "./textColor";

interface PublishedAtProps {
  link: string;
  date: string;
}
const PublishedAt: React.FC<PublishedAtProps> = ({ link, date }) => (
  <Link css={textColor} href={link}>
    <P>
      <time>
        {format(parse(date, "yyyy-MM-dd", new Date()), "MMMM dd, yyyy")}
      </time>
    </P>
  </Link>
);

export default PublishedAt;
