import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import useQuestionsStats from "../../hooks/useQuestionsStats";
import { setGameFinished } from "../../features/questionsSlice";
import DialogWrapper from "../reusableComponents/DialogWrapper";
import { AppDispatch } from "../../app/store";

type ConfirmFinishProps = {
  confirmDialogOpen: boolean;
  setConfirmDialogOpen: (value: boolean) => void;
};

const ConfirmFinish = ({
  confirmDialogOpen,
  setConfirmDialogOpen,
}: ConfirmFinishProps) => {
  const { totalQuestions, answeredQuestions } = useQuestionsStats();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DialogWrapper
      open={confirmDialogOpen}
      onClose={() => setConfirmDialogOpen(false)}
    >
      <DialogTitle fontSize="2rem">Complete Quiz ? </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: "1.3rem" }}>
          You have answered{" "}
          <Box component="span" color="white">
            {answeredQuestions}
          </Box>{" "}
          out of{" "}
          <Box component="span" color="white">
            {totalQuestions}
          </Box>{" "}
          questions.
        </DialogContentText>
        <DialogContentText>
          This action will submit your answers and conclude the quiz.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setConfirmDialogOpen(false)}
          variant="contained"
          color="error"
          size="large"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            navigate("/score-card", { replace: true });
            setConfirmDialogOpen(false);
            dispatch(setGameFinished());
          }}
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </DialogActions>
    </DialogWrapper>
  );
};

export default ConfirmFinish;
