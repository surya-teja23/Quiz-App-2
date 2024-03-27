import { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";

type DialogWrapperProps = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
};

const DialogWrapper = ({ children, open, onClose }: DialogWrapperProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          p: "2rem",
          borderRadius: "2.5rem",
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default DialogWrapper;
