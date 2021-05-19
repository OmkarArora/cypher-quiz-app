import React, { useState } from "react";
import { lightTheme, darkTheme } from "./themes";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import { Navbar } from "./components";

function App() {
  const [activeTheme, setActiveTheme] = useState("light");
  return (
    <ThemeProvider
      theme={activeTheme === "light" ? lightTheme : darkTheme}
    >
      <Navbar name="Cypher" setActiveTheme={setActiveTheme}/>

      <div>Apple</div>
    </ThemeProvider>
  );
}

export default App;
