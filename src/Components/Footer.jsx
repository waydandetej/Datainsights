import { Stack } from "@mui/material";
import React from "react";
import Footerdata from "./Footerdata";

function Footer() {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Footerdata />
      </Stack>
    </>
  );
}

export default Footer;
