import { HTMLAttributes } from "react";

export default function Mark(props: HTMLAttributes<HTMLDivElement>) {
  return <span className="bg-icon-shirt-primary" {...props} />;
}
