import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DialogWrapper from "../reusableComponents/DialogWrapper";

type QuestionNotFoundProps = {
  open: boolean;
};

const QuestionNotFound = ({ open }: QuestionNotFoundProps) => {
  const navigate = useNavigate();
  return (
    <DialogWrapper open={open}>
      <DialogTitle fontSize="2rem">Question Not Found</DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <DialogContentText fontSize="1.3rem">or invalid URL</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => navigate("/")}
          sx={{ mx: "auto" }}
          variant="contained"
          size="large"
        >
          Go to Homepage
        </Button>
      </DialogActions>
    </DialogWrapper>
  );
};

export default QuestionNotFound;
