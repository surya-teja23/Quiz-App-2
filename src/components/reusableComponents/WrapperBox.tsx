import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

type WrapperBoxProps = {
  children: ReactNode;
  width?: boolean;
};

const WrapperBox = ({ children, width }: WrapperBoxProps) => {
  return (
    <Box mt={5} display={"flex"} justifyContent={"center"}>
      <Paper
        elevation={20}
        variant="elevation"
        sx={{
          borderRadius: "3.5rem",
          padding: "3rem",
          width: width ? "min(80vw,850px)" : "min(80vw,500px)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default WrapperBox;
