import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useExerciseContext } from "../context/ExerciseContext";

import {
  ExerciseDetail,
  SimilairEquipment,
  SimilairTarget,
  VideoCard,
} from "../components";
import { exerciseOptions, fetchData } from "../utils/fetchData";
const Exercise = () => {
  const { id } = useParams();
  const [currentExercise, setCurrentExercise] = useState({});
  useEffect(() => {
    const getCurrentExercise = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
      const exerciseData = await fetchData(url, exerciseOptions);
      console.log(exerciseData);
      setCurrentExercise(exerciseData);
    };
    getCurrentExercise();
  }, [id]);

  return (
    <div className="px-[30px] py-[50px]">
      <ExerciseDetail currentExercise={currentExercise} />
      <VideoCard name={currentExercise.name} />
      <SimilairTarget target={currentExercise.target} />
      <SimilairEquipment equipment={currentExercise.equipment} />
    </div>
  );
};

export default Exercise;
