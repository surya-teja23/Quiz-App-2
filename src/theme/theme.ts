import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/questionsSlice";

export const useMuiTheme = () => {
  const theme = useSelector(selectTheme);
  return createTheme({
    palette: {
      mode: theme,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    }
  });
};