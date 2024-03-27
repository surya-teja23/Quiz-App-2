import Box from "@mui/material/Box";
import useQuestionNavigation from "../../hooks/useQuestionNavigation";
import { useDispatch, useSelector } from "react-redux";
import { resetAnswer, selectQuestions } from "../../features/questionsSlice";
import QuestionNavigationButtonsComponent from "../reusableComponents/QuestionNavigationButtonsComponent";
import { AppDispatch } from "../../app/store";

type QuestionNavigationButtonsProps = {
  currIndex: number;
  setConfirmDialogOpen: (value: boolean) => void;
};

const QuestionNavigationButtons = ({
  currIndex,
  setConfirmDialogOpen,
}: QuestionNavigationButtonsProps) => {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch<AppDispatch>();
  const { goToPreviousQuestion, goToNextQuestion } = useQuestionNavigation();

  return (
    <Box
      justifyContent="flex-end"
      mt="1rem"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        rowGap: {
          xs: "1rem",
          sm: 0,
        },
      }}
    >
      {currIndex !== 0 && (
        <QuestionNavigationButtonsComponent
          tooltip="Move to previous question"
          btnTitle="Previous"
          handleClick={() => goToPreviousQuestion(currIndex)}
          startIcon={true}
        />
      )}
      <QuestionNavigationButtonsComponent
        tooltip="Reset answer"
        btnTitle="Reset"
        handleClick={() =>
          dispatch(resetAnswer({ questionId: questions[currIndex].id }))
        }
        startIcon={false}
      />
      {currIndex !== questions.length - 1 ? (
        <QuestionNavigationButtonsComponent
          tooltip="Move to next question"
          btnTitle="Next"
          handleClick={() => goToNextQuestion(currIndex)}
          startIcon={false}
        />
      ) : (
        <QuestionNavigationButtonsComponent
          tooltip="Confirm to submit"
          btnTitle="Finish"
          handleClick={() => {
            setConfirmDialogOpen(true);
          }}
          startIcon={false}
        />
      )}
    </Box>
  );
};

export default QuestionNavigationButtons;
