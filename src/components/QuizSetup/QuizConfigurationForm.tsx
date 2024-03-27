import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { questionsError } from "../../features/questionsSlice";
import { useSelector } from "react-redux";
import useQuizConfigurationForm from "../../hooks/useQuizConfigurationForm";
import SelectComponent from "../reusableComponents/SelectComponent";
import ProceedButton from "../reusableComponents/ProceedButton";

const QuizConfigurationForm = () => {
  const numbers = Array.from({ length: 16 }, (_, index) => index + 5);
  const {
    categories,
    noOfQuestions,
    setNoOfQuestions,
    categorySelected,
    setCategorySelected,
    difficultySelected,
    setDifficultySelected,
    handleSubmit,
    handleAlertClose,
  } = useQuizConfigurationForm();
  const difficulties = ["Easy", "Medium", "Hard"];
  const error = useSelector(questionsError);

  return (
    <Box onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
      {error && (
        <Alert severity="error" onClose={handleAlertClose}>
          {error}
        </Alert>
      )}
      <SelectComponent
        label="# of questions"
        valuesArray={numbers}
        value={noOfQuestions}
        valueHandler={(value) => setNoOfQuestions(value as number)}
      />
      <SelectComponent
        label="Categories"
        valuesArray={categories}
        value={categorySelected}
        valueHandler={(value) => setCategorySelected(value as string)}
      />
      <SelectComponent
        label="Difficulty"
        valuesArray={difficulties}
        value={difficultySelected}
        valueHandler={(value) => setDifficultySelected(value as string)}
      />
      <ProceedButton isQuizConfig={true} />
    </Box>
  );
};

export default QuizConfigurationForm;
