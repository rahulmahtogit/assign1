import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Login from "./componets/Login";
import { useSelector } from "react-redux";
import theme from "./Theme/theme"
import { ThemeProvider } from "@mui/material/styles";

function App() {

  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={isAuth ? <Home /> : <Navigate to="/" />}
            />
          </Routes>
      </ThemeProvider>
     
      </BrowserRouter>
    </div>
  );    
}

export default App;
