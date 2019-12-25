import React, { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
  <Grid
    container
    item
    direction="column"
    justify="center"
    alignItems="flex-start"
  >
    {children}
  </Grid>
);

export default Main;
