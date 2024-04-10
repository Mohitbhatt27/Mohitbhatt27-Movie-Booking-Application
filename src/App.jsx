import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import ThemeContext from "./context/ThemeContext";
import { useEffect, useState } from "react";

function App() {

  const [theme, setTheme] = useState("dark");


useEffect(() => {
  const userTheme = localStorage.getItem("app-theme");
  if (userTheme) {
    setTheme(userTheme);
  }
},[])

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="app-wrapper" data-theme={theme}>
        <Navbar />
        <MainRoutes />
        </div>
      </ThemeContext.Provider>
      
    </>
  );
}

export default App;
