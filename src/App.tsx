import React, { useState } from "react";
import { lightTheme, darkTheme } from "./themes";
import { ThemeProvider } from "@material-ui/core";
import { Home, Navbar, QuizHome, QuizPlayArea, QuizResults } from "./components";
import { Routes, Route } from "react-router";
import "./app.css";

function App() {
  const [activeTheme, setActiveTheme] = useState("light");
  // const currentTheme = activeTheme === "light" ? lightTheme : darkTheme;
  // console.log(currentTheme)
  return (
    <ThemeProvider theme={activeTheme === "light" ? lightTheme : darkTheme}>
      <Navbar name="Cypher" setActiveTheme={setActiveTheme} />
      {/* <div style={{backgroundColor: currentTheme.palette.secondary.main, color: currentTheme.palette.primary.main}}> */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizHome />} />
          <Route path="/quiz/:quizId/play" element={<QuizPlayArea />} />
          <Route path="/quiz/:quizId/results" element={<QuizResults />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
