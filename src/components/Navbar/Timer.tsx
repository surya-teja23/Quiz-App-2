import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTimer from "../../hooks/useTimer";
import { selectTime } from "../../features/questionsSlice";
import { useSelector } from "react-redux";

const Timer = () => {
  const time = useSelector(selectTime);
  let { minutes, seconds } = useTimer(time);

  return (
    <Box border={1} p=".5rem" mr="1rem" sx={{ borderRadius: "1rem" }}>
      <Typography color={minutes === 0 && seconds < 30 ? "red" : "white"}>
        {minutes < 10 ? `0${minutes}` : minutes}&nbsp;&nbsp;:&nbsp;&nbsp;
        {seconds < 10 ? `0${seconds}` : seconds}
      </Typography>
    </Box>
  );
};

export default Timer;
