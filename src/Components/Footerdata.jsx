import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Instagram from "../Components/Images/Insta.svg";
import Facebook from "../Components/Images/facebook.svg";
import Linkedin from "../Components/Images/linkedin.svg";
import Twitter from "../Components/Images/twitter.svg";
import Logo from "../Components/Images/data_logo.svg";

function Footerdata() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignContent="center">
        <Stack
          width="100%"
          height="442px"
          direction="row"
          spacing={6}
          justifyContent="center"
          alignContent="center"
        >
          <Box
            sx={{
              width: "366px",
              height: "409px",
              direction: "row",
              display: "flex",
            }}
          >
            <Stack direction="column" spacing={4}>
              <Typography
                fontFamily=" 'Public Sans', sans-serif"
                color="#AA2974"
                fontSize="35px"
                fontWeight="400"
                lineHeight="normal"
                fontStyle="normal"
              >
                <img
                  src={Logo}
                  alt="images"
                  style={{ width: "25px", paddingRight: "2px" }}
                />
                datainsights
              </Typography>
              <Typography
                color="#797979"
                fontSize="17px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="157.4%"
                width="280px"
                fontFamily="'Nunito Sans', sans-serif"
              >
                Our team is ready to assist you on your data-driven journey.
                Let's connect and transform your insights today!
              </Typography>
              <Typography
                color="#797979"
                fontSize="17 px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="157.4%"
                fontFamily="'Nunito Sans', sans-serif"
              >
                Level 2, Prime Business Bay, Baner, Pune 411045, Maharashtra,
                India
              </Typography>
            </Stack>
          </Box>
          <Stack direction="column" spacing={3}>
            <Typography
              color="#242331"
              fontWeight="700"
              fontStyle="normal"
              fontSize="30px"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Pages
            </Typography>
            <Divider width="180px" height="1px" background="#E3E3E3"></Divider>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Home
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              About
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              How it works
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Use Cases
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Industry
            </Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography
              color="#242331"
              fontWeight="700"
              fontStyle="normal"
              fontSize="30px"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Help
            </Typography>
            <Divider width="180px" height="1px" background="#E3E3E3"></Divider>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Help Center
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Contact Support
            </Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography
              color="#242331"
              fontWeight="700"
              fontStyle="normal"
              fontSize="30px"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Contact Us
            </Typography>
            <Divider width="180px" height="1px" background="#E3E3E3"></Divider>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              info@Datainsights.com
            </Typography>
            <Typography
              color="#797979"
              fontSize="17px"
              fontStyle="normal"
              fontWeight="400"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              +91 8530116304
            </Typography>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Typography
              color="#242331"
              fontWeight="700"
              fontStyle="normal"
              fontSize="30px"
              textTransform="capitalize"
              fontFamily="'Nunito Sans', sans-serif"
            >
              Follow Us
            </Typography>
            <Divider width="180px" height="1px" background="#E3E3E3"></Divider>
            <Stack direction="row" spacing={2} marginTop="20px">
              <img src={Facebook} alt="images" />
              <img src={Twitter} alt="images" />
              <img src={Linkedin} alt="images" />
              <img src={Instagram} alt="images" />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default Footerdata;
