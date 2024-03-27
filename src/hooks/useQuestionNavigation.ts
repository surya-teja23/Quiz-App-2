import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectQuestions } from "../features/questionsSlice";

const useQuestionNavigation = () => {
  const navigate = useNavigate();
  const questions = useSelector(selectQuestions);

  const goToNextQuestion = (currIndex: number) => {
    const nextQuestionId = questions[currIndex + 1].id;
    navigate(`/question/${nextQuestionId}`, { replace: true });
  };

  const goToPreviousQuestion = (currIndex: number) => {
    const prevQuestionId = questions[currIndex - 1].id;
    navigate(`/question/${prevQuestionId}`, { replace: true });
  };

  const goToQuestion = (
    questionId: number,
    setIsDrawerOpen: (isOpen: boolean) => void
  ) => {
    navigate(`/question/${questionId}`);
    setIsDrawerOpen(false);
  };

  return {
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
  };
};

export default useQuestionNavigation;
