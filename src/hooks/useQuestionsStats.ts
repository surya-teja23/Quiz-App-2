import { useSelector } from "react-redux";
import { selectQuestions } from "../features/questionsSlice";

const useQuestionsStats = () => {
  const questions = useSelector(selectQuestions);
  const totalQuestions = questions.length;
  const answeredQuestions = questions.filter(
    (question) => question.selectedOption.length !== 0
  ).length;
  const unansweredQuestions = totalQuestions - answeredQuestions;
  return { questions, totalQuestions, answeredQuestions, unansweredQuestions };
};

export default useQuestionsStats;
