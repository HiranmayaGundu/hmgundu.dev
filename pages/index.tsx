import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Main from "../components/Main";

const Index = () => {
  return (
    <Main>
      <Grid item xs={12} sm={12} md={12}>
        <Typography>Hi! I'm Hiranmaya Gundu.</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Typography>
          I'm a software engineer from India, who's currently exploring the
          different fields Computer has to offer. This website was born from the
          desire to build a personal blog, as well as a desire to explore static
          server-rendered sites in React. You can find more details in the
          blogs!
        </Typography>
      </Grid>
    </Main>
  );
};

export default Index;
