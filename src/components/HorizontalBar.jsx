import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
const HorizontalBar = ({ data, exerciseRef }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m={"0 40px"}
        >
          <BodyPart item={item} exerciseRef={exerciseRef} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalBar;
