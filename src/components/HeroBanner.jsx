import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Banner from "../assets/banner.png";
const HeroBanner = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100vh"}
      gap={"15px"}
      justifyContent={"center"}
      alignItems={"start"}
      width={"50%"}
      p={"20px"}
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
      <img src={Banner} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
};

export default HeroBanner;
