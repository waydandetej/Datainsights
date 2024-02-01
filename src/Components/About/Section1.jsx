import React from "react";
import About1 from "../Images/About3.png";
import About2 from "../Images/About2.svg";
import { Typography, Stack } from "@mui/material";

const Section1 = () => {
  return (
    <>
      <Stack display="flex" alignItems="center">
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
            About DataInsights
          </Typography>
          <Typography
            fontFamily="'Nunito Sans'"
            width="748px"
            height="90px"
            fontWeight="500"
            lineHeight="25px"
            alignContent="center"
            color="#797979"
            fontSize="17px"
          >
            Discover insights, make informed decisions with DataInsights your
            ultimate exploration companion. DataInsight is the architect of your
            data revolution. Elevate your business with accuracy, simplicity,
            and unmatched power, enabling creativity in every data-driven
            activity.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <img
            src={About1}
            alt="images"
            style={{
              width: "668px",
              height: "441px",
              borderRadius: "50px",
              marginTop: "66px",
            }}
          />
          <img
            src={About2}
            alt="images"
            style={{ width: "353px", height: "571px" }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={23}
          width="1400px"
          height="181px"
          justifyContent="center"
          marginLeft="10px"
        >
          <Typography
            fontFamily="'Nunito Sans', sans-serif"
            fontWeight="800"
            fontSize="30px"
          >
            What we do
          </Typography>
          <Stack direction="column" spacing={4} width="691px" height="181px">
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
            >
              At DataInsights, we turn data into superpowers! Our robust
              platform empowers analysis that elevates results. Dive into a
              world of stunning graphics and collaborative insights.
            </Typography>
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
            >
              With DataInsight's predictive analytics, unlock trends for
              decisions that shine! Transform your data journey—because your
              insights matter!
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
