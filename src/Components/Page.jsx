// src/components/Page.js

import React from "react";
import Image from "../Components/Images/Image.png";
import {
  CssBaseline,
  Container,
  Paper,
  Box,
  Typography,
  Stack,
} from "@mui/material";

const Page = () => {
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
            width: "700px",

            height: "550px",
            top: "177px",
            left: "150px",
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
              fontSize="40px"
              lineHeight="44px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Use DataInsights to Unlock <br /> Industry Insights 
            </Typography>

            <Typography
              fontWeight="400"
              fontSize="15px"
              fontFamily="'Nunito Sans', sans-serif"
              color="#797979"
              width="450px"
            >
               A thorough data analysis and visualization tool to help
              organizations make informed decisions based on data. 
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="15px"
              color="#797979"
              width="450px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              A state-of-the-art platform for data analysis and visualization,
              DataInsights is intended to assist organizations in deriving
              meaningful insights from their data. With the help of our
              technology, businesses can see patterns, make data-driven choices,
              and streamline their processes. Businesses may increase consumer
              satisfaction, expedite decision-making, and maintain an advantage
              over rivals by utilizing DataInsights. 
            </Typography>
          </Stack>
        </Box>
        <img
          src={Image}
          style={{
            width: "600px",
            height: "300px",
            left: "650px",
            top: "350px",
            position: "absolute",
            zIndex: 2,
          }}
        />
        {/* <Play
            style={{
              zIndex: 3,
              color: "#C43A8C",
            }}
          /> */}
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

export default Page;
