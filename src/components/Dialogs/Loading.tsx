import CircularProgress from "@mui/material/CircularProgress";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useSelector } from "react-redux";
import { questionsStatus } from "../../features/questionsSlice";
import DialogWrapper from "../reusableComponents/DialogWrapper";

const Loading = () => {
  const status = useSelector(questionsStatus);

  return (
    <DialogWrapper open={status === "pending"}>
      <DialogContent sx={{ textAlign: "center" }}>
        <CircularProgress size={100} />
      </DialogContent>
      <DialogTitle fontSize="2rem">Loading ...</DialogTitle>
    </DialogWrapper>
  );
};

export default Loading;
