import React, { useState } from "react";
import { lightTheme, darkTheme } from "./themes";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import { Home, Navbar, QuizHome, QuizPlayArea } from "./components";
import { Routes, Route } from "react-router";

function App() {
  const [activeTheme, setActiveTheme] = useState("light");
  return (
    <ThemeProvider theme={activeTheme === "light" ? lightTheme : darkTheme}>
      <Navbar name="Cypher" setActiveTheme={setActiveTheme} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizId" element={<QuizHome />} />
          <Route path="/quiz/:quizId/play" element={<QuizPlayArea />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
