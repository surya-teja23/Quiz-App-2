import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

type SelectComponentProps = {
  label: string;
  valuesArray: string[] | number[];
  value: string | number;
  valueHandler: (value: string | number) => void;
};

const SelectComponent = ({
  label,
  valuesArray,
  value,
  valueHandler,
}: SelectComponentProps) => {
  return (
    <Box component="div" my="1.5rem">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={(e) =>
            valueHandler(
              typeof value === "string" ? e.target.value : +e.target.value
            )
          }
        >
          {typeof value === "string" && <MenuItem value="">None</MenuItem>}
          {valuesArray.map((number) => {
            return (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
