import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import Dashboard from "../Components/Images/Dashboard.svg";
import Password from "../Components/Images/Password.svg";
import First1 from "../Components/Images/First1.svg";
import First2 from "../Components/Images/First2.svg";
import First3 from "../Components/Images/First3.svg";

import Third1 from "../Components/Images/third1.svg";
import Third2 from "../Components/Images/third2.svg";
import Third3 from "../Components/Images/third3.svg";
function Featuresdata() {
  const data = [
    {
      id: 1,
      img1: First1,
      img2: First2,
      img3: First3,
      title: "Built-in SQL  Editor",
      desc: "DataInsights comes with a handy SQL editor, making it a breeze to create, edit, and fix SQL queries.",
      read: "Learn More",
    },
    {
      id: 2,
      img1: Dashboard,
      img2: Password,

      title: "Easy Explore, Visualize Data",
      desc: "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
      read: "Learn More",
    },
    {
      id: 3,
      img1: Third1,
      img2: Third2,
      img3: Third3,
      title: "Custom dashboards",
      desc: "DataInsights lets you make personalized dashboards that show your data visually, helping you track your business in real-time.",
      read: "Learn More",
    },
  ];
  const styleTypography1 = {
    color: "#242331",
    fontFamily: "'Nunito Sans', sans-serif",

    fontSize: "29px",
    fontWeight: "600",
    lineHeight: "33px",
    textAlign: "center",
    width: "80%",
  };
  const styleTypography2 = {
    color: "#797979",

    fontSize: "17px",
    fontWeight: "400",
    lineHeight: "34px",
    textAlign: "center",
    width: "298px",
    fontFamily: "'Nunito Sans', sans-serif",
  };
  const styleTypography3 = {
    color: "#242331",
    fontSize: "13px",
    fontWeight: "700",
    lineHeight: "24px",
    textDecorationLine: "underline",
    paddingTop: "25px",
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
      img3: {
        width: "160px",
        height: "140px",
        zIndex: 3,
        flexShrink: 0,
        marginTop: "96px",
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
        position: "absolute",
        width: "198px",
        height: "130px",
        flexShrink: 0,
        zIndex: "3",
        left: "200px",
        top: "136px",
      },
      img3: { display: "none" },
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
        width: "118px",
        height: "90px",
        flexShrink: 0,
        zIndex: 4,
        position: "absolute",
        left: "49px",
        top: "139px",
      },
      img3: {
        width: "260px",
        height: "170px",
        flexShrink: 0,
        borderRadius: "10px",
        zIndex: 0,
        position: "absolute",
        left: "72px",
        top: "45px",
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
                <img
                  src={items.img3}
                  alt="images"
                  style={{
                    ...individualStyles[items.id]?.img3,
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
              <Typography sx={styleTypography3}>{items.read}</Typography>
            </Stack>
          </Stack>
        </Box>
      ))}
    </>
  );
}

export default Featuresdata;
