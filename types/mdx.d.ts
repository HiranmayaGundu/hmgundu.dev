/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
