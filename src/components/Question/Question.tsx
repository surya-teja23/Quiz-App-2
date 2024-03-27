import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WrapperBox from "../reusableComponents/WrapperBox";
import QuestionNavigationButtons from "./QuestionNavigationButtons";
import QuestionNotFound from "../Dialogs/QuestionNotFound";
import ConfirmFinish from "../Dialogs/ConfirmFinish";
import QuestionOptions from "./QuestionOptions";
import { useParams } from "react-router-dom";
import { selectQuestions } from "../../features/questionsSlice";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const Question = () => {
  const { id } = useParams();
  const {
    palette: { mode },
  } = useTheme();
  const questions = useSelector(selectQuestions);
  const currIndex = questions.findIndex((question) => question.id === +id!);
  const question = questions[currIndex];
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  if (!question) {
    return (
      <>
        <QuestionNotFound open={true} />
      </>
    );
  }

  return (
    <WrapperBox width={true}>
      <Box
        sx={{
          backgroundColor: mode === "light" ? "#1976d2" : "rgb(255,255,255,.2)",
          display: "flex",
          alignItems: "flex-start",
          p: "1rem",
          mb: "1rem",
          borderRadius: "1.2rem",
          color: "#fff",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.3rem", mr: ".4rem" }}
        >
          {currIndex + 1})
        </Typography>
        <Typography
          sx={{
            fontSize: "1.3rem",
            flex: 1,
            textAlign: "justify",
            userSelect: "none",
          }}
        >
          {question.question}
        </Typography>
      </Box>
      <QuestionOptions currIndex={currIndex} />
      <QuestionNavigationButtons
        currIndex={currIndex}
        setConfirmDialogOpen={setConfirmDialogOpen}
      />
      <ConfirmFinish
        confirmDialogOpen={confirmDialogOpen}
        setConfirmDialogOpen={setConfirmDialogOpen}
      />
    </WrapperBox>
  );
};

export default Question;
