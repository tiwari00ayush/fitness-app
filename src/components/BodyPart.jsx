import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/gym.png";
import { useExerciseContext } from "../context/ExerciseContext";
import { exerciseOptions, fetchData } from "../utils/fetchData";
const BodyPart = ({ item, exerciseRef }) => {
  const { setBodyPart, bodyPart, setExercise } = useExerciseContext();

  useEffect(() => {
    const getExerciseByBodyPart = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        const url = "https://exercisedb.p.rapidapi.com/exercises?limit=1300";
        exerciseData = await fetchData(url, exerciseOptions);
      } else {
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1300`;
        exerciseData = await fetchData(url, exerciseOptions);
      }
      setExercise(exerciseData);
    };
    getExerciseByBodyPart();
  }, [bodyPart]);
  return (
    <div
      className={`my-[30px] flex flex-col items-center justify-center bg-white rounded-bl-md w-[200px] h-[210px] cursor-pointer gap-47px hover:scale-110 ${
        bodyPart === item ? "border-t-[#ff2625] border-t-2 border-solid" : ""
      }`}
      onClick={() => {
        setBodyPart(item);
        exerciseRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "80px", height: "80px" }} />
      <p className="font-bold text-[1.2rem] py-5">{item}</p>
    </div>
  );
};

export default BodyPart;
