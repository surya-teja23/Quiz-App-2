import { useEffect, useState } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { setGameFinished } from "../features/questionsSlice";

type Time = number;

const useTimer = (initialTime: Time) => {
  const [secondsLeft, setSecondsLeft] = useState(initialTime);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (secondsLeft <= 0) {
      dispatch(setGameFinished());
    }

    const timeout = setTimeout(() => {
      setSecondsLeft((prev: number) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft, dispatch]);

  return { minutes: Math.floor(secondsLeft / 60), seconds: secondsLeft % 60 };
};

export default useTimer;
