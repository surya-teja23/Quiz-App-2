import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { fetchQuestions, resetFormError } from "../features/questionsSlice";

const useQuizConfigurationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = [
    "Linux",
    "Bash",
    "PHP",
    "Docker",
    "HTML",
    "MySQL",
    "WordPress",
    "Kubernetes",
    "JavaScript",
    "DevOps",
  ];

  const [noOfQuestions, setNoOfQuestions] = useState<number>(5);
  const [categorySelected, setCategorySelected] = useState<string>("");
  const [difficultySelected, setDifficultySelected] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      fetchQuestions({
        limit: noOfQuestions,
        ...(categorySelected && { tags: categorySelected }),
        ...(difficultySelected && { difficulty: difficultySelected }),
      })
    );
  };

  const handleAlertClose = () => {
    dispatch(resetFormError());
  };

  return {
    categories,
    noOfQuestions,
    setNoOfQuestions,
    categorySelected,
    setCategorySelected,
    difficultySelected,
    setDifficultySelected,
    handleSubmit,
    handleAlertClose,
  };
};

export default useQuizConfigurationForm;
