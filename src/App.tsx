import { Home, QuizHome, QuizPlayArea, QuizResults } from "./components";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizHome />} />
          <Route path="/quiz/:quizId/play" element={<QuizPlayArea />} />
          <Route path="/quiz/:quizId/results" element={<QuizResults />} />
        </Routes>
      </div>
  );
}

export default App;
