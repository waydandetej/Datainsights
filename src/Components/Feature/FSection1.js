import React from "react";
import { Typography, Stack } from "@mui/material";
import FSection1data from "./FSection1data";

const FeatureSection1 = () => {
  return (
    <>
      <Stack marginTop="100px">
        <Stack
          alignItems="center"
          display="flex"
          justifyContent="center"
          direction="column"
          textAlign="center"
        >
          <Typography
            fontFamily="'Nunito Sans'"
            fontWeight="700"
            fontSize="40px"
            lineHeight="108px"
            alignContent="center"
          >
            Features
          </Typography>
          <Typography
            fontFamily="'Nunito Sans'"
            width="891px"
            height="90px"
            fontWeight="500"
            lineHeight="25px"
            alignContent="center"
            color="#797979"
            fontSize="17px"
          >
            Step into the realm of boundless opportunities with DataInsights,
            where every piece of data transforms into your ultimate advantage.
            Delve into the extraordinary features that position DataInsights as
            the catalyst for informed decisions and unrivaled triumph in the
            business landscape. 
          </Typography>
        </Stack>
        <Stack
          width="100%"
          height="650px"
          direction={"row"}
          spacing={10}
          sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
        >
          <FSection1data />
        </Stack>
      </Stack>
    </>
  );
};

export default FeatureSection1;
