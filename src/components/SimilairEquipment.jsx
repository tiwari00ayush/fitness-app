import React, { useState, useEffect } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { Box } from "@mui/material";
const SimilairEquipment = ({ equipment = "cable" }) => {
  const [similairEx, setSimilairEx] = useState([]);
  useEffect(() => {
    const getSimilairExercise = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}?limit=10`;
      const exerciseData = await fetchData(url, exerciseOptions);
      console.log(exerciseData);
      setSimilairEx(exerciseData);
    };
    getSimilairExercise();
  }, [equipment]);

  return (
    <div className="px-[80px]">
      <h1 className="text-4xl my-8">
        Similair <span className="text-red-400">Equpiment </span> exercise
      </h1>
      <ScrollMenu>
        {similairEx.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m={"0 40px"}
          >
            <ExerciseCard exercise={item} />
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default SimilairEquipment;
