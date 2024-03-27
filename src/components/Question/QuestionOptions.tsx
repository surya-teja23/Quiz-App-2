import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import RadioGroup from "@mui/material/RadioGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import OptionWrapper from "../reusableComponents/OptionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { selectOption, selectQuestions } from "../../features/questionsSlice";
import { AppDispatch } from "../../app/store";
import { styled } from "@mui/material/styles";

const CustomFormControlLabel = styled(FormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    width: "100%",
    marginInline: "auto",
    marginBlock: ".3rem",
    paddingInline: "1rem",
    "& .MuiTypography-root": {
      flex: 1,
    },
  })
);

type QuestionOptionsProps = {
  currIndex: number;
};

const QuestionOptions = ({ currIndex }: QuestionOptionsProps) => {
  const questions = useSelector(selectQuestions);
  const { id, selectedOption, isMultipleCorrectAnswers, options } =
    questions[currIndex];
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box>
      {isMultipleCorrectAnswers ? (
        <FormControl sx={{ width: "100%" }}>
          <FormGroup>
            {options.map((option, index) => {
              return (
                <CustomFormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={(e) =>
                        dispatch(
                          selectOption({
                            questionId: id,
                            selectedOption: e.target.name,
                          })
                        )
                      }
                      checked={selectedOption.includes(option)}
                      name={option}
                    />
                  }
                  label={
                    <OptionWrapper
                      option={option}
                      selectedOption={selectedOption}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>
      ) : (
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            value={selectedOption[0] || ""}
            onChange={(e) => {
              dispatch(
                selectOption({ questionId: id, selectedOption: e.target.value })
              );
            }}
          >
            {options.map((option, index) => {
              return (
                <CustomFormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={
                    <OptionWrapper
                      option={option}
                      selectedOption={selectedOption}
                    />
                  }
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      )}
    </Box>
  );
};

export default QuestionOptions;
