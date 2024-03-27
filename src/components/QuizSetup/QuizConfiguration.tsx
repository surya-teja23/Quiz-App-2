import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  questionsStatus,
  selectPlayerName,
  selectQuestions,
} from "../../features/questionsSlice";
import Loading from "../Dialogs/Loading";
import QuizConfigurationForm from "./QuizConfigurationForm";
import WrapperBox from "../reusableComponents/WrapperBox";

const QuizConfiguration = () => {
  const playerName = useSelector(selectPlayerName);
  const questions = useSelector(selectQuestions);
  const status = useSelector(questionsStatus);

  if (status === "fulfilled") {
    return <Navigate to={`/question/${questions[0].id}`} />;
  }

  return (
    <WrapperBox>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textDecoration: "underline",
          my: "2rem",
          textAlign: "center",
        }}
      >
        Welcome, {playerName}
      </Typography>
      <QuizConfigurationForm />
      <Loading />
    </WrapperBox>
  );
};

export default QuizConfiguration;
