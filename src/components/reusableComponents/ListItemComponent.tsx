import { ElementType } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

type ListItemComponentProps = {
  Icon: ElementType;
  text: string;
  color: string;
};

const ListItemComponent = ({ Icon, text, color }: ListItemComponentProps) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton sx={{ pointerEvents: "none" }}>
          <ListItemIcon>
            <Icon color={color} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListItemComponent;
