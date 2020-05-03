import { Heading, HeadingProps } from "rebass/styled-components";

const BaseHeading: React.FC<HeadingProps> = props => (
  <Heading
    lineHeight={1.25}
    fontWeight="bold"
    fontFamily="system"
    alignSelf="flex-start"
    color="text"
    {...props}
  />
);

const H1: React.FC<HeadingProps> = props => (
  <BaseHeading fontSize={5} as="h1" mb={4} mt={5} {...props} />
);

const H2: React.FC<HeadingProps> = props => (
  <BaseHeading fontSize={4} as="h2" mb={4} mt={5} {...props} />
);

const H3: React.FC<HeadingProps> = props => (
  <BaseHeading fontSize={3} as="h3" mb={3} mt={4} {...props} />
);

const H4: React.FC<HeadingProps> = props => (
  <BaseHeading fontSize={2} as="h4" mb={3} mt={3} {...props} />
);

export { H1, H2, H3, H4 };
export default BaseHeading;
