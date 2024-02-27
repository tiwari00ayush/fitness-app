import React from "react";
import bodypartImage from "../assets/body-part.png";
import target from "../assets/target.png";
import equipment from "../assets/equipment.png";
const ExerciseDetail = ({ currentExercise }) => {
  console.log(currentExercise);
  return (
    <div className="flex gap-10 items-center justify-center flex-wrap">
      <img
        src={currentExercise?.gifUrl}
        alt="exercise gif"
        className="h-[500px]"
      />
      <div className="">
        <h1 className="text-5xl underline text-red-500 mb-4">
          {currentExercise?.name}
        </h1>
        <p className="text-[1.6rem] my-3 font-bold">Instructions :</p>
        <div className="pl-10 text-[1.2rem]">
          {currentExercise?.instructions?.map((inst, index) => (
            <p key={index} className="py-1 text-gray-600">
              {index + 1}. {inst}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[100px]">
          <p className="py-10  text-center">
            <img
              src={bodypartImage}
              alt="bodypartImage"
              className="w-[75px] rounded-full p-4 bg-yellow-300"
            />
            {currentExercise?.bodyPart}
          </p>
          <p className="py-10 text-center">
            <img
              src={equipment}
              alt="equipment"
              className="w-[75px] rounded-full p-4 bg-yellow-300 "
            />
            {currentExercise?.equipment}
          </p>
          <p className="py-10 text-center">
            <img
              src={target}
              alt="target"
              className="w-[75px] rounded-full p-4 bg-yellow-300 "
            />
            {currentExercise?.target}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
