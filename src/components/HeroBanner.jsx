import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/banner.png";
const HeroBanner = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center lg:block ">
      <Box
        display={"flex"}
        flexDirection={"column"}
        className="h-fit w-[100%] pt-[100px] pl-[40px] lg:h-screen lg:w-[50%] lg:p-[20px]"
        gap={"15px"}
        justifyContent={"center"}
        alignItems={"start"}
        flexWrap={"wrap"}
        sx={{
          marginInline: { sm: "100px", xs: "50px" },
        }}
      >
        <Typography color={"red"} fontWeight={"600"} fontSize={"1.3rem"}>
          Fitness Club
        </Typography>
        <Typography
          fontWeight={"700"}
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize={"22px"} lineHeight={"35px"}>
          Check out the most effective exercises.
        </Typography>
        <Button variant="contained" color="error">
          Explore Exercises
        </Button>
        <Typography
          fontWeight={"700"}
          fontSize={"10rem"}
          mt={"10px"}
          ml={"10px"}
          color={"red"}
          sx={{ opacity: "0.15", display: { lg: "block", sm: "none" } }}
        >
          Exercises
        </Typography>
      </Box>
      <div className="flex w-[100%] max-w-[350px] object-cover justify-center items-center">
        <img src={Banner} alt="banner" className="hero-banner-img"></img>
      </div>
    </div>
  );
};

export default HeroBanner;
