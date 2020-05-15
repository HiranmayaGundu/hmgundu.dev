import React from "react";
import { Box } from "rebass/styled-components";
import { ChildrenOnlyProps } from "components/Constants";

export const TwoColumnGrid: React.FC<ChildrenOnlyProps> = (props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridColumnGap: [0, 2],
        gridTemplateColumns: ["1fr", "1fr 1fr"],
        alignItems: "center",
        gridRowGap: [0, 2],
        justifyItems: "center",
      }}
      {...props}
    />
  );
};
