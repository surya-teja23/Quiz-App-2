import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

type OptionWrapperProps = {
  option: string;
  selectedOption: string[];
};

const OptionWrapper = ({ option, selectedOption }: OptionWrapperProps) => {
  const {
    palette: { mode },
  } = useTheme();
  const selected = selectedOption.includes(option);
  return (
    <Box
      component="div"
      sx={{
        border: "1px solid",
        p: "1rem",
        borderRadius: "1.5rem",
        background:
          mode === "dark"
            ? selected
              ? "#f0f0f0"
              : ""
            : selected
            ? "rgb(0,0,0,.5)"
            : "",
        color:
          mode === "dark" ? (selected ? "black" : "") : selected ? "white" : "",
        flex: 1,
        transition: "background-color 0.3s ease",
        "&:hover": {
          background:
            mode === "dark"
              ? selected
                ? "#f0f0f0"
                : "rgba(0, 0, 0, 0.4)"
              : selected
              ? "rgb(0,0,0,.6)"
              : "rgb(0,0,0,.1)",
        },
      }}
    >
      {option}
    </Box>
  );
};

export default OptionWrapper;
