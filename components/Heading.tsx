import { Heading, HeadingProps } from "rebass/styled-components";
import { CSSProp } from "styled-components";

const BaseHeading = (props: HeadingProps & { css?: CSSProp }): JSX.Element => (
  <Heading
    lineHeight={1.25}
    fontWeight="bold"
    fontFamily="body"
    alignSelf="flex-start"
    color="text"
    {...props}
  />
);

const H1 = ({
  fontSize = [4, 5],
  ...rest
}: HeadingProps & { css?: CSSProp }): JSX.Element => (
  <BaseHeading fontSize={fontSize} as="h1" mb={4} mt={5} {...rest} />
);

const H2 = (props: HeadingProps & { css?: CSSProp }): JSX.Element => (
  <BaseHeading fontSize={[3, 4]} as="h2" mb={4} mt={4} {...props} />
);

const H3 = (props: HeadingProps & { css?: CSSProp }): JSX.Element => (
  <BaseHeading fontSize={[2, 3]} as="h3" mb={3} mt={[3, 4]} {...props} />
);

const H4 = (props: HeadingProps & { css?: CSSProp }): JSX.Element => (
  <BaseHeading fontSize={[1, 2]} as="h4" mb={3} mt={3} {...props} />
);

export { H1, H2, H3, H4 };
export default BaseHeading;
