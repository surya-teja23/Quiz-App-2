import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemComponent from "../reusableComponents/ListItemComponent";
import MenuIcon from "@mui/icons-material/Menu";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import useQuestionsStats from "../../hooks/useQuestionsStats";
import useQuestionNavigation from "../../hooks/useQuestionNavigation";

type QuestionNavigationDrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
};

const QuestionNavigationDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: QuestionNavigationDrawerProps) => {
  const { questions, totalQuestions, answeredQuestions, unansweredQuestions } =
    useQuestionsStats();
  const { goToQuestion } = useQuestionNavigation();
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)} size="large">
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right"
      >
        <Box mt="1rem">
          <IconButton onClick={() => setIsDrawerOpen(false)} size="large">
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography textAlign="center" variant="h4" mb="1rem">
            Quiz Overview
          </Typography>
          <List>
            <Divider />
            <ListItemComponent
              Icon={ListIcon}
              text={`Number of Questions : ${totalQuestions}`}
              color="inherit"
            />
            <ListItemComponent
              Icon={CheckCircleIcon}
              text={`Answered Questions : ${answeredQuestions}`}
              color="success"
            />
            <ListItemComponent
              Icon={RadioButtonUncheckedIcon}
              text={`Unanswered Questions : ${unansweredQuestions}`}
              color="error"
            />
          </List>
          <Typography textAlign="center" variant="h5" mb="1rem">
            Question No's
          </Typography>
          <Box
            sx={{
              display: "flex",
              px: "25px",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              maxWidth: "351px",
              gap: "15px",
            }}
          >
            {questions.map((question, index) => {
              return (
                <Button
                  onClick={() => {
                    goToQuestion(question.id, setIsDrawerOpen);
                  }}
                  variant="contained"
                  color={
                    question.selectedOption.length === 0 ? "inherit" : "success"
                  }
                  size="large"
                  sx={{
                    fontSize: "1.2rem",
                    width: "50px",
                  }}
                >
                  {index + 1}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default QuestionNavigationDrawer;
