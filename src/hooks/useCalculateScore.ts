import { useSelector } from "react-redux";
import { selectQuestions } from "../features/questionsSlice";

const useCalculateScore = () => {
  const questions = useSelector(selectQuestions);
  let totalScore = 0;
  questions.forEach((question) => {
    const { selectedOption, correctAnswers } = question;
    if (correctAnswers.every((answer) => selectedOption.includes(answer))) {
      totalScore += 1;
    }
  });

  return totalScore;
};

export default useCalculateScore;
