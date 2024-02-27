import React, { useEffect, useState } from "react";
import { Box, TextField, Stack, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalBar from "./HorizontalBar";
import { useExerciseContext } from "../context/ExerciseContext";
import DummyLoading from "./DummyLoading";

const SearchExercises = ({ exerciseRef }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const { setExercise } = useExerciseContext();
  useEffect(() => {
    setLoading(true);
    async function getCategory() {
      try {
        const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
        const categoriesData = await fetchData(url, exerciseOptions);
        setCategories(["all", ...categoriesData]);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError(error);
      }
    }
    getCategory();
  }, []);
  const handleSearch = async () => {
    setExerciseLoading(true);
    if (search) {
      try {
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
      } catch (error) {
        console.log(error);
      }
      setSearch("");
    }
  };
  return (
    <Stack alignItems={"center"}>
      <Typography
        textAlign={"center"}
        fontWeight={"600"}
        fontSize={"2rem"}
        my={"20px"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        sx={{
          width: { lg: "1200px", xs: "100%" },
          position: "relative",
        }}
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
            maxWidth: { xs: "600px" },
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
      {loading ? (
        <DummyLoading />
      ) : (
        <Box sx={{ position: "relative", width: "100%", p: "10px", m: "10px" }}>
          <HorizontalBar data={categories} exerciseRef={exerciseRef} />
        </Box>
      )}
    </Stack>
  );
};

export default SearchExercises;
