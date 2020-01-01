import React from "react";
import Link from "./Link";
import { parse, format } from "date-fns";

interface PublishedAtProps {
  link: string;
  date: string;
}
const PublishedAt: React.FC<PublishedAtProps> = props => (
  <Link href={props.link}>
    <time>
      {format(parse(props.date, "MMMM DD, YYYY", new Date()), "MMMM DD, YYYY")}
    </time>
  </Link>
);

export default PublishedAt;
