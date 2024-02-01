import React from "react";
import Image from "../Images/Page3.svg";
import { CssBaseline, Box, Typography, Stack } from "@mui/material";

const FeaturePage3 = () => {
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
              fontFamily="'Nunito Sans', sans-serif"
              width="615px"
            >
              Custom dashboards, alerts, and notifications for effective
              monitoring
            </Typography>

            <Typography
              fontWeight="400"
              fontSize="15px"
              fontFamily="'Nunito Sans', sans-serif"
              color="#797979"
              width="450px"
            >
              DataInsights lets you make personalized dashboards that show your
              data visually, helping you track your business in real-time.{" "}
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="15px"
              color="#797979"
              width="450px"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Set up alerts for specific data conditions and get notified. Stay
              on top of your data, spot potential issues, and act proactively. 
            </Typography>
          </Stack>
        </Box>
        <img
          src={Image}
          style={{
            width: "589px",
            height: "430px",
            left: "737px",
            top: "247px",
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

export default FeaturePage3;
