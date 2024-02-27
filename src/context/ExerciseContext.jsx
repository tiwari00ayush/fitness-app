import React, { createContext, useContext, useState } from "react";

const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <ExerciseContext.Provider
      value={{ exercise, bodyPart, setBodyPart, setExercise }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => {
  return useContext(ExerciseContext);
};
