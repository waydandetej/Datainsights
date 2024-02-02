import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

// import Buttons from "./Buttons";
import Image1 from "../Images/Why1.svg";
import Image2 from "../Images/Why2.svg";
import Image3 from "../Images/Why3.svg";
import Slide2 from "../Images/Image2.svg";
import Slide3 from "../Images/Image3.svg";
import Slide4 from "../Images/Image4.svg";

function WhySection2() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [selectedTextOption, setSelectedTextOption] = useState(0);
  const [image1Visibility, setImage1Visibility] = useState(false);
  const [image2Visibility, setImage2Visibility] = useState(false);
  const [image3Visibility, setImage3Visibility] = useState(false);
  const [image4Visibility, setImage4Visibility] = useState(false);
  const [image5Visibility, setImage5Visibility] = useState(false);
  const [image6Visibility, setImage6Visibility] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
    setSelectedButtonIndex(index);
    setSelectedTextOption(0);
    console.log(selectedButtonIndex);
    if (selectedButtonIndex === 2) {
      setImage1Visibility(true);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(false);
    } else if (selectedButtonIndex === 0) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(true);
      setImage6Visibility(false);
    } else {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(true);
    }
  };
  const handleTextOptionClick = (index) => {
    setSelectedTextOption(index);
    console.log(selectedButtonIndex);
    if (index === 0 && selectedButtonIndex === 0) {
      setImage1Visibility(true);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(false);
    } else if (index === 1 && selectedButtonIndex === 0) {
      setImage1Visibility(false);
      setImage2Visibility(true);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(false);
    } else if (index === 2 && selectedButtonIndex === 0) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(true);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(false);
    } else if (index === 3 && selectedButtonIndex === 0) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(true);
      setImage5Visibility(false);
      setImage6Visibility(false);
    } else if (index === 0 && selectedButtonIndex === 1) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(true);
      setImage6Visibility(false);
    } else if (index === 0 && selectedButtonIndex === 2) {
      setImage1Visibility(false);
      setImage2Visibility(false);
      setImage3Visibility(false);
      setImage4Visibility(false);
      setImage5Visibility(false);
      setImage6Visibility(true);
    }
  };
  const styleBox1 = {
    display: "flex",
    justifyContent: "center",
  };
  const styleBox2 = {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  };
  const styleBox3 = {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };
  const styleTypography1 = {
    marginTop: "50px",
    textAlign: "center",
    color: "#242331",
    fontFamily: "Nunito",
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "40px",
    width: "78%",
  };
  const SelectButton = [
    {
      id: 1,
      name: "Modern Charts",
    },
    {
      id: 2,
      name: "Built-in Sql Editor",
    },
    {
      id: 3,
      name: "Visual Masterpiece",
    },
  ];
  const SelectTypography = [
    {
      id: 1,
      textOptions: [
        "World Map",
        "Big Number With Tradeline",
        "Radar Chart",
        "Sunburst",
      ],
    },
    {
      id: 2,
      textOptions: ["SQL Editor"],
    },
    {
      id: 3,
      textOptions: ["Dashboard"],
    },
  ];

  const styleTypography2 = {
    color: "rgba(36, 35, 49, 1)",
    fontFamily: "Nunito",

    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "normal",
  };
  const styleTypography3 = {
    color: "#797979",
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: 800,
    lineHeight: "30px",
    width: "80%",
  };
  const StyleButton = {
    background: "rgba(249, 249, 249, 1)",
    width: "380px",
    height: "85px",
    borderRadius: "20px",
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "850px", marginTop: "200px" }}>
        <Box sx={styleBox1}></Box>
        <Box sx={styleBox1}>
          <Typography sx={styleTypography1}>
            From Row Data to Stunning Visualization Datainsights’ Drag-and-Drop
            Revolutionizes Dashboard Creation
          </Typography>
        </Box>
        {/* Transition state */}

        <Box sx={styleBox2} paddingTop={"80px"}>
          <Stack direction={"column"} spacing={10}>
            {/* Button ========================================== */}
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>
              {SelectButton.map((items, index) => (
                <Button
                  key={index}
                  sx={{
                    ...StyleButton,
                    backgroundColor:
                      index === selectedButtonIndex ? "#A12873" : "#F9F9F9",
                    ":hover": {
                      backgroundColor:
                        index === selectedButtonIndex ? "#A12873" : "#F9F9F9",
                    },
                  }}
                  onClick={() => handleButtonClick(index)}
                >
                  <Typography
                    sx={{
                      ...styleTypography2,
                      color:
                        index === selectedButtonIndex
                          ? "white"
                          : "rgba(36, 35, 49, 1)",
                    }}
                  >
                    {items.name}
                  </Typography>
                </Button>
              ))}
            </Stack>
            {/* Content=============================================   */}
            <Box sx={styleBox3}>
              <Stack
                direction={"column"}
                spacing={2}
                sx={{
                  width: "37%",
                  alignItems: "center",
                }}
              >
                {SelectTypography[selectedButtonIndex].textOptions.map(
                  (option, index) => (
                    <Typography
                      key={index}
                      sx={{
                        ...styleTypography3,
                        cursor: "pointer",
                        color:
                          selectedTextOption === index ? "#A12873" : "#797979",
                      }}
                      onClick={() => handleTextOptionClick(index)}
                    >
                      {option}
                    </Typography>
                  )
                )}
              </Stack>
              <Box sx={styleBox2}>
                {image1Visibility && (
                  <img src={Image1} alt="Images" style={{ width: "96%" }} />
                )}
                {image2Visibility && (
                  <img src={Slide2} alt="Images" style={{ width: "67%" }} />
                )}
                {image3Visibility && (
                  <img src={Slide3} alt="Images" style={{ width: "67%" }} />
                )}
                {image4Visibility && (
                  <img src={Slide4} alt="Images" style={{ width: "67%" }} />
                )}
                {image5Visibility && (
                  <img src={Image2} alt="Images" style={{ width: "96%" }} />
                )}
                {image6Visibility && (
                  <img src={Image3} alt="Images" style={{ width: "96%" }} />
                )}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default WhySection2;
