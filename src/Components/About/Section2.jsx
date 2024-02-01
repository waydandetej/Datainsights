import React from "react";
import { Stack, Typography } from "@mui/material";
import Mission from "../Images/mission.svg";
import Vision from "../Images/vision.svg";

const Section2 = () => {
  return (
    <>
      <Stack width="1444px" marginTop="100px" marginLeft="100px">
        <Stack
          width="1444px"
          height="378px"
          direction="row"
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <Stack width="529px" height="240px" direction="column" spacing={3}>
            <Typography
              fontFamily="'Nunito Sans', sans-serif"
              fontWeight="800"
              fontSize="30px"
            >
              Our Mission
            </Typography>
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
              width="512px"
            >
              At DataInsights, we're on a mission to make your data work
              smarter, not harder. Our goal is to revolutionize the way
              businesses embrace technology, offering solutions that streamline
              operations and supercharge decision-making.
            </Typography>
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
              width="508px"
            >
              We believe in transforming data into your greatest ally, giving
              you a clear advantage in the digital race.
            </Typography>
          </Stack>
          <img
            src={Mission}
            alt="images"
            style={{ width: "540px", height: "370px" }}
          />
        </Stack>
      </Stack>
      <Stack width="1400px" marginLeft="100px">
        <Stack
          width="1444px"
          height="378px"
          direction="row"
          spacing={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <img
            src={Vision}
            alt="images"
            style={{ width: "540px", height: "370px" }}
          />
          <Stack width="529px" height="240px" direction="column" spacing={3}>
            <Typography
              fontFamily="'Nunito Sans', sans-serif"
              fontWeight="800"
              fontSize="30px"
            >
              Our Vision
            </Typography>
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
              width="496px"
            >
              At DataInsights, we invision a world where technology is your
              greatest ally. Our goal is to be your digital companion,
              simplifying complex data into success stories.
            </Typography>
            <Typography
              fontSize="17px"
              fontWeight="400"
              lineHeight="25px"
              fontFamily="'Nunito Sans'"
              color="#797979"
              width="496px"
            >
              We're here to help businesses thrive in the digital realm, using
              innovation and insight to make data a valuable asset for success.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Section2;
