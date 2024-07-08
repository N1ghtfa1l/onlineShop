import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
