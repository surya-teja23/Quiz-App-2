import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WrapperBox from "../reusableComponents/WrapperBox";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import useQuestionsStats from "../../hooks/useQuestionsStats";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayerName, resetGame } from "../../features/questionsSlice";
import useCalculateScore from "../../hooks/useCalculateScore";
import { AppDispatch } from "../../app/store";

const ScoreCard = () => {
  const playerName = useSelector(selectPlayerName);
  const { totalQuestions, answeredQuestions } = useQuestionsStats();
  const totalScore = useCalculateScore();

  const dispatch = useDispatch<AppDispatch>();
  const result =
    totalScore > Math.floor(totalQuestions / 2)
      ? `🎉 Congratulations ${playerName} 🎉`
      : `😞Better Luck Next Time , ${playerName}`;
  const stats = [
    { label: "Player Name", value: playerName },
    { label: "Total Questions", value: totalQuestions },
    { label: "Answered Questions", value: answeredQuestions },
    { label: "Score", value: `${totalScore} / ${totalQuestions}` },
  ];

  return (
    <WrapperBox>
      <Box>
        <Typography variant="h4" textAlign="center">
          {result}
        </Typography>
      </Box>
      <TableContainer sx={{ border: 1, mt: "2rem", borderRadius: "2rem" }}>
        <Table>
          <TableBody>
            {stats.map((stat) => {
              return (
                <TableRow key={stat.label}>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    {stat.label}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: "1.1rem" }}>
                    {stat.value}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          dispatch(resetGame());
        }}
        sx={{ display: "block", mx: "auto", mt: "2rem" }}
        size="large"
        variant="contained"
      >
        Restart
      </Button>
    </WrapperBox>
  );
};

export default ScoreCard;
