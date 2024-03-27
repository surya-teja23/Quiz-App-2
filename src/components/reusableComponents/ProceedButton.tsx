import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ProceedButtonProps = {
  isInstructions?: boolean;
  isQuizConfig?: boolean;
};

const ProceedButton = ({
  isInstructions = false,
  isQuizConfig = false,
}: ProceedButtonProps) => {
  return (
    <Box
      sx={{
        mt: isInstructions ? "2rem" : "0",
        mb: isInstructions ? "0" : ".7rem",
        display: "grid",
      }}
    >
      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIosIcon />}
        sx={{ mx: "auto" }}
      >
        {isQuizConfig ? "Start Quiz" : "Proceed"}
      </Button>
    </Box>
  );
};

export default ProceedButton;
