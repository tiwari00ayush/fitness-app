import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <div className="bg-white border-t-2 border-solid border-t-red-600 py-4 px-2 w-[350px] hover:scale-110 ease-in-out duration-200">
        <img src={exercise.gifUrl} alt="Exercise gif" />
        <span className="bg-red-500 text-white rounded-md mx-2 p-2">
          {exercise.bodyPart}
        </span>
        <span className="bg-yellow-500 text-white rounded-md mx-2 p-2">
          {exercise.target}
        </span>
        <h1 className="text-[1.1rem] mt-3 ">{exercise.name}</h1>
      </div>
    </Link>
  );
};

export default ExerciseCard;
