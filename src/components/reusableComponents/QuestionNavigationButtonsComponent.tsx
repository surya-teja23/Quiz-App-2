import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

type QuestionNavigationButtonsProps = {
  tooltip: string;
  btnTitle: string;
  handleClick: () => void;
  startIcon: boolean;
};

const QuestionNavigationButtonsComponent = ({
  tooltip,
  btnTitle,
  handleClick,
  startIcon,
}: QuestionNavigationButtonsProps) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Tooltip title={tooltip}>
      <Button
        onClick={handleClick}
        fullWidth={isXs}
        variant="contained"
        size="large"
        sx={{
          mr: {
            sm:
              btnTitle === "Previous"
                ? "auto"
                : btnTitle === "Reset"
                ? "1rem"
                : "",
          },
        }}
        color={
          btnTitle === "Previous"
            ? "error"
            : btnTitle === "Next"
            ? "primary"
            : btnTitle === "Reset"
            ? "warning"
            : "success"
        }
        startIcon={startIcon ? <ArrowBackIosIcon /> : <></>}
        endIcon={
          startIcon || btnTitle === "Reset" ? <></> : <ArrowForwardIosIcon />
        }
      >
        {btnTitle}
      </Button>
    </Tooltip>
  );
};

export default QuestionNavigationButtonsComponent;
