import React from "react";
import Whyus1 from "../Images/Whyus1.png";
import Whyus2 from "../Images/Whyus2.svg";
import { Typography, Stack } from "@mui/material";

const Section1 = () => {
  return (
    <>
      <Stack display="flex" alignItems="center" spacing={8}>
        <Stack
          alignItems="center"
          display="flex"
          justifyContent="center"
          direction="column"
          textAlign="center"
        >
          <Typography
            fontFamily="Nunito"
            fontWeight="800"
            fontSize="47px"
            lineHeight="108px"
            alignContent="center"
          >
            Why Choose Datainsights ?
          </Typography>
          <Typography
            fontFamily="Nunito"
            width="913px"
            height="90px"
            fontWeight="500"
            lineHeight="25px"
            alignContent="center"
            color="#797979"
            fontSize="17px"
          >
            At DataInsights, we understand that making sense of your data can be
            a daunting task, especially when dealing with large and complex
            datasets. That's why we've developed a suite of data exploration and
            visualization tools that are designed to help you uncover real-time
            insights and make data-driven decisions with ease. 
          </Typography>
        </Stack>
        <Stack direction="row">
          <img
            src={Whyus1}
            alt="images"
            style={{
              width: "1173px",
              height: "441px",
              borderRadius: "23px",
              marginTop: "-24px",
              marginBottom: "31px",
            }}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={10}
          width="1400px"
          height="181px"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <img
            src={Whyus2}
            alt="images"
            style={{
              width: "483px",
              height: "316px",
              marginTop: "49px",
            }}
          />

          <Stack direction="column" spacing={3} width="691px" height="181px">
            <Typography
              fontSize="16px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="Nunito"
              color="#797979"
              width="612px"
            >
              What sets us apart from traditional business intelligence tools is
              our ability to handle complex data analysis and provide real-time
              insights. Our tools are equipped with advanced analytics
              capabilities and machine learning algorithms that enable you to
              explore your data in depth, without any lag or delay.
            </Typography>
            <Typography
              fontSize="16px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="Nunito"
              color="#797979"
              width="612px"
            >
              We also recognize that dealing with big data can be a challenge
              for many organizations. That's why our tools are designed to
              handle massive amounts of data with ease, ensuring that you can
              analyze and visualize your data quickly and efficiently. 
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Section1;
