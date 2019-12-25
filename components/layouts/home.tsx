import React, { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

interface LayoutProps {
  path: string;
  pageTitle: string;
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ path, pageTitle, children }) => (
  <Grid container direction="column" justify="space-between" spacing={3}>
    <Header />
    {path}
    {pageTitle}
    <Main>{children}</Main>
    <Footer />
  </Grid>
);

export default Layout;
