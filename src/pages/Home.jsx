import { Box } from "@mui/material";
import React, { useRef } from "react";
import { SearchExercises, HeroBanner, Exercises } from "../components";
const Home = () => {
  const exerciseRef = useRef(null);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises exerciseRef={exerciseRef} />
      <Exercises exerciseRef={exerciseRef} />
    </Box>
  );
};

export default Home;
