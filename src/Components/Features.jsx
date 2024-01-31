import { Stack } from "@mui/material";
import React from "react";
import Featuresdata from "./Featuresdata";

function Features() {
  return (
    <>
      <Stack
        width="100%"
        height="650px"
        direction={"row"}
        spacing={10}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Featuresdata />
      </Stack>
    </>
  );
}

export default Features;
