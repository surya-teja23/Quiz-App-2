import { ReactNode } from "react";
import { useMuiTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeComponentProps = {
  children: ReactNode;
};

const ThemeComponent = ({ children }: ThemeComponentProps) => {
  return (
    <ThemeProvider theme={useMuiTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
