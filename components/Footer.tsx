import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import { ReactNode, ReactType } from "react";
import Link from "./Link";
import styled from "styled-components";

interface FooterColumnProps {
  title: string;
  width?: number;
  last?: boolean;
  children: ReactNode;
}

interface FooterItemProps {
  IconComp?: ReactType;
  children: ReactNode;
  href: string;
  rel?: string;
  prefetch?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = props => {
  return (
    <Grid
      container
      item
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      <Typography variant="h6">{props.title}</Typography>
      {props.children}
    </Grid>
  );
};

const FooterItem: React.FC<FooterItemProps> = ({
  IconComp,
  href,
  rel,
  children,
  prefetch
}) => {
  return (
    <Grid item xs={12} sm={3} md={3} lg={3}>
      <Link href={href} rel={rel} prefetch={prefetch} underline>
        {IconComp && <IconComp />}
        {children}
      </Link>
    </Grid>
  );
};

const FooterGrid = styled(Grid)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default () => (
  <FooterGrid
    container
    item
    direction="row"
    alignItems="flex-start"
    justify="center"
    spacing={2}
  >
    <FooterColumn title="About this website">
      <Typography>
        This is my website! I'm Hiranmaya Gundu, a dev exploring web dev,
        systems and AI trying to decide where to land. This is my personal blog!
      </Typography>
    </FooterColumn>
    <FooterColumn last title="Social Media">
      <FooterItem
        href="https://github.com/HiranmayaGundu"
        IconComp={GitHub}
        rel="me"
      >
        <Typography>View the source on GitHub</Typography>
      </FooterItem>
      <FooterItem
        href="https://twitter.com/newblockk"
        IconComp={Twitter}
        rel="me"
      >
        <Typography>
          You can follow me on twitter, though I don't do much there
        </Typography>
      </FooterItem>
    </FooterColumn>
  </FooterGrid>
);
