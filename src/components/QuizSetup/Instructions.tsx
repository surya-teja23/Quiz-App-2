import WrapperBox from "../reusableComponents/WrapperBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useInstructions from "../../hooks/useInstructions";
import ProceedButton from "../reusableComponents/ProceedButton";

const Instructions = () => {
  const navigate = useNavigate();
  const instructions = useInstructions();

  return (
    <WrapperBox>
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textDecoration: "underline",
          mb: "1rem",
        }}
      >
        Note :
      </Typography>
      <Box
        component="form"
        onSubmit={() => navigate("/quiz-configuration", { replace: true })}
      >
        {instructions.map(({ Icon, text }, index) => {
          return (
            <Box key={index} display="flex" gap=".7rem" mb=".3rem">
              <Icon />
              <Typography>{text}</Typography>
            </Box>
          );
        })}
        <ProceedButton isInstructions={true} />
      </Box>
    </WrapperBox>
  );
};

export default Instructions;
