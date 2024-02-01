import React from "react";
import Image from "../Images/Page2.svg";
import { CssBaseline, Box, Typography, Stack } from "@mui/material";

const FeaturePage2 = () => {
  return (
    <div>
      <CssBaseline />

      <Box
        style={{
          width: "100%",
          height: "900px",

          position: "relative",
          marginLeft: "147px",
        }}
      >
        <Box
          style={{
            width: "807px",

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
              fontFamily="'Nunito Sans', sans-serif"
              width="555px"
            >
              Built-in SQL editor for easy query creation and debugging
            </Typography>

            <Typography
              fontWeight="400"
              fontSize="15px"
              fontFamily="'Nunito Sans', sans-serif"
              color="#797979"
              width="450px"
            >
              DataInsights comes with a handy SQL editor, making it a breeze to
              create, edit, and fix SQL queries.
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="15px"
              color="#797979"
              width="450px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              It highlights syntax, suggests code, and checks for errors,
              simplifying the process.
            </Typography>

            <Typography
              fontWeight="400"
              fontSize="15px"
              color="#797979"
              width="450px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Easily run on-the-fly queries, analyze data, and save them for
              later use.
            </Typography>
          </Stack>
        </Box>
        <img
          src={Image}
          style={{
            width: "623px",
            height: "351px",
            left: "710px",
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
            left: "1100px",
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

export default FeaturePage2;
