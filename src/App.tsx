import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/QuizSetup/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Instructions from "./components/QuizSetup/Instructions";
import QuizConfiguration from "./components/QuizSetup/QuizConfiguration";
import Question from "./components/Question/Question";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="instructions"
          element={
            <ProtectedRoute>
              <Instructions />
            </ProtectedRoute>
          }
        />
        <Route
          path="quiz-configuration"
          element={
            <ProtectedRoute>
              <QuizConfiguration />
            </ProtectedRoute>
          }
        />
        <Route
          path="question/:id"
          element={
            <ProtectedRoute>
              <Question />
            </ProtectedRoute>
          }
        />
        <Route
          path="score-card"
          element={
            <ProtectedRoute>
              <ScoreCard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
