import React, { useEffect, useState } from "react";
import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalBar from "./HorizontalBar";
import { useExerciseContext } from "../context/ExerciseContext";

const SearchExercises = ({ exerciseRef }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const { setExercise } = useExerciseContext();
  useEffect(() => {
    async function getCategory() {
      const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
      const categoriesData = await fetchData(url, exerciseOptions);
      setCategories(["all", ...categoriesData]);
    }
    getCategory();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const url = `https://exercisedb.p.rapidapi.com/exercises?limit=1300`;
      const exerciseData = await fetchData(url, exerciseOptions);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      console.log(searchedExercises);
      setExercise(searchedExercises);
      exerciseRef.current?.scrollIntoView({ behavior: "smooth" });
      setSearch("");
    }
  };
  return (
    <Stack alignItems={"center"}>
      <Typography
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"2rem"}
        mb={"20px"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{ width: { lg: "1200px", xs: "600px", position: "relative" } }}
        paddingInline={"20px"}
      >
        <TextField
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          sx={{
            borderRadius: "40px",
            backgroundColor: "white",
            width: { lg: "800px", xs: "70%" },
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></TextField>
        <Button
          variant="contained"
          color="error"
          sx={{
            width: { lg: "175px", xs: "30%" },
            fontSize: { lg: "16px", xs: "0.8rem" },
            height: "56px",
          }}
          onClick={handleSearch}
        >
          search
        </Button>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", p: "10px", m: "10px" }}>
        <HorizontalBar data={categories} exerciseRef={exerciseRef} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
