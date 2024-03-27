import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Timer from "./Timer";
import ThemeSwitch from "./ThemeSwitch";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../features/questionsSlice";
import QuestionNavigationDrawer from "./QuestionNavigationDrawer";

const Navbar = () => {
  const { id } = useParams();
  const questions = useSelector(selectQuestions);
  const questionIndex = questions.findIndex((question) => question.id === +id!);

  const [showTimerAndMenuIcon, setShowTimerAndMenuIcon] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const isQuestionRoute =
      questionIndex !== -1 && id !== undefined && id !== null && id !== "";
    setShowTimerAndMenuIcon(isQuestionRoute);
  }, [id, questionIndex]);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            mr="auto"
            sx={{ userSelect: "none" }}
          >
            QuizNet
          </Typography>
          <ThemeSwitch />
          {showTimerAndMenuIcon && <Timer />}
          {showTimerAndMenuIcon && (
            <QuestionNavigationDrawer
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
