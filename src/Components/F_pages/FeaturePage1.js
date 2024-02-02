// src/components/Page.js

import React from "react";
import Image from "../Images/Page1.svg";
import { CssBaseline, Box, Typography, Stack } from "@mui/material";

const FeaturePage1 = () => {
  return (
    <div>
      <CssBaseline />

      <Box
        style={{
          width: "100%",
          height: "900px",

          position: "relative",
        }}
      >
        <Box
          style={{
            width: "761px",

            height: "550px",
            top: "177px",
            left: "60px",
            borderRadius: "50px",
            position: "absolute",
            backgroundColor: "#F1F1F1",
          }}
        >
          <Stack
            direction="column"
            spacing={5}
            marginTop="120px"
            paddingLeft="50px"
          >
            <Typography
              fontWeight="700"
              fontSize="35px"
              lineHeight="42px"
              fontFamily="Nunito"
              width="555px"
            >
              Explore and visualize diverse data effortlessly
            </Typography>
            <Stack>
              <Typography
                fontWeight="400"
                fontSize="15px"
                fontFamily="'Nunito Sans', sans-serif"
                color="#797979"
                width="450px"
              >
                Datainsights allows users to easily connect to various data
                sources.
              </Typography>
              <Typography
                fontWeight="400"
                fontSize="15px"
                color="#797979"
                width="450px"
                fontFamily="'Nunito Sans', sans-serif"
              >
                The platform provides a user-friendly interface for data
                exploration, enabling users to navigate and analyze their data
                with ease, regardless of its format or source.
              </Typography>
            </Stack>
            <Typography
              fontWeight="400"
              fontSize="15px"
              color="#797979"
              width="450px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              It offers a range of visualization tools, including charts,
              tables, and maps, to help users understand their data and identify
              trends, patterns, and insights.
            </Typography>
          </Stack>
        </Box>
        <img
          src={Image}
          style={{
            width: "623px",
            height: "351px",
            left: "669px",
            top: "277px",
            position: "absolute",
            zIndex: 2,
          }}
        />

        <Box
          style={{
            width: "300px",
            height: "550px",
            background: "#BE3788",
            right: "0",
            top: "177px",

            borderRadius: "50px 0px 0px 50px",
            position: "absolute",
            zIndex: 1,
          }}
        ></Box>
      </Box>
    </div>
  );
};

export default FeaturePage1;
