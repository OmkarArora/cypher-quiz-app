import { Home, QuizPlayArea, QuizResults } from "./components";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizId/play" element={<QuizPlayArea />} />
          <Route path="/results" element={<QuizResults />} />
        </Routes>
      </div>
  );
}

export default App;
