import React, { useRef, useState } from "react";
import { useExerciseContext } from "../context/ExerciseContext";
import ExerciseCard from "./ExerciseCard";
import { Pagination, Stack } from "@mui/material";

const Exercises = ({ exerciseRef }) => {
  const { exercise, setExercise } = useExerciseContext();
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentPageExercise = exercise.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const resultRef = useRef(null);
  const paginate = (e, value) => {
    setCurrentPage(value);
    resultRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="px-2 pb-10" ref={exerciseRef}>
      <h2 className="text-3xl text-center" ref={resultRef}>
        Showing Results{" "}
      </h2>
      <div
        className={`flex flex-wrap gap-10 items-stretch px-[70px] py-10 justify-center ${
          exercise.gifUrl === undefined ? "" : "hidden"
        }`}
      >
        {currentPageExercise.map((element, index) => (
          <ExerciseCard exercise={element} key={index} />
        ))}
      </div>
      <Stack mt="100px" alignItems={"center"}>
        {exercise.length > exercisePerPage && (
          <Pagination
            color="standard"
            onChange={paginate}
            page={currentPage}
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisePerPage)}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </div>
  );
};

export default Exercises;
