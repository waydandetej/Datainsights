import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import Dashboard from "../Images/FSec1.svg";
import First1 from "../Images/FF1.svg";
import First2 from "../Images/FFSection2.svg";

import Third1 from "../Images/Fthird1.svg";

function Featuresdata() {
  const data = [
    {
      id: 1,
      img1: First1,
      img2: First2,

      title: "Embedded Dashboards and Charts",
      desc: "Embedded dashboards and charts help you share live data insights with customers, partners, or team members, boosting decision-making power. ",
    },
    {
      id: 2,
      img1: Dashboard,

      title: "Connect seamlessly ",
      desc: " With SQL Alchemy, Presto, Hive, and Spark",
    },
    {
      id: 3,
      img1: Third1,

      title: "Advanced charts",
      desc: "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
    },
  ];
  const styleTypography1 = {
    color: "#242331",
    fontFamily: "'Nunito Sans', sans-serif",

    fontSize: "29px",
    fontWeight: "600",
    lineHeight: "29px",
    textAlign: "center",
    width: "80%",
  };
  const styleTypography2 = {
    color: "#797979",

    fontSize: "17px",
    fontWeight: "400",
    lineHeight: "29px",
    textAlign: "center",
    width: "306px",
    fontFamily: "'Nunito Sans', sans-serif",
  };

  const styleBox1 = {
    backgroundColor: "#F9F9F9",
    borderRadius: "40px",
    width: "400px",
    height: "530px",
  };
  const individualStyles = {
    1: {
      img1: {
        width: "120px",
        height: "42px",
        flexShrink: 0,
        top: "57px",
        objectFit: "cover",
        left: "227px",
        position: "absolute",
        zIndex: "3",
      },

      img2: {
        width: "267px",
        height: "174px",
        flexShrink: 0,
        zIndex: 2,
        borderRadius: "10px",

        paddingLeft: "54px",
        marginTop: "20px",
        top: "8px",
        left: "21px",
        position: "absolute",
      },
    },
    2: {
      img1: {
        width: "260px",
        height: "202px",
        flexShrink: 0,
        zIndex: 1,
        top: "28px",
        left: "45px",
        position: "absolute",
      },
      img2: {
        display: "none",
      },
    },

    3: {
      img1: {
        width: "118px",
        height: "90px",
        flexShrink: 0,
        zIndex: 4,
        top: "56px",
        left: "254px",
      },
      img2: {
        display: "none",
      },
    },
  };
  return (
    <>
      {data.map((items, index) => (
        <Box key={index} sx={styleBox1}>
          <Stack
            direction={"column"}
            spacing={4}
            sx={{
              width: "100%",
              height: "554px",
            }}
          >
            <Box sx={{ width: "400px", height: "220px", marginTop: "10px" }}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={items.img1}
                  alt="images"
                  style={{
                    ...individualStyles[items.id]?.img1,
                    position: "absolute",
                    zIndex: 3,
                  }}
                />
                <img
                  src={items.img2}
                  alt="images"
                  style={{
                    ...individualStyles[items.id]?.img2,
                    position: "absolute",
                  }}
                />
              </Box>
            </Box>
            <Stack
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={2}
            >
              <Typography sx={styleTypography1}>{items.title}</Typography>
              <Typography sx={styleTypography2}>{items.desc}</Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
}

export default Featuresdata;
