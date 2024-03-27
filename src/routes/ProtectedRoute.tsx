import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  selectGameStatus,
  selectPlayerName,
  selectQuestions,
} from "../features/questionsSlice";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const playerName = useSelector(selectPlayerName);
  const questions = useSelector(selectQuestions);
  const isGameFinished = useSelector(selectGameStatus);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isGameFinished) {
      navigate("/score-card", { replace: true });
    } else {
      switch (true) {
        case pathname === "/":
          if (playerName !== "") {
            navigate("/quiz-configuration", { replace: true });
          }
          break;
        case pathname === "/instructions":
          if (playerName === "Home") {
            navigate("/", { replace: true });
          }
          break;
        case pathname === "/quiz-configuration":
          if (questions.length !== 0) {
            navigate(`/question:${questions[0].id}`, { replace: true });
          } else if (playerName === "") {
            navigate("/", { replace: true });
          }
          break;
        case /^\/question\/\d+$/.test(pathname):
          if (questions.length === 0) {
            navigate("/quiz-configuration", { replace: true });
          }
          break;
        default:
          navigate("/404");
      }
    }
  }, [pathname, playerName, questions, isGameFinished, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
