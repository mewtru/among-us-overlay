import React from "react";
import "./App.css";
import { AmongUsScreen } from "./AmongUsScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateOverlay from "./CreateOverlay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <CreateOverlay />
        </Route>
        <Route path="/overlay">
          <AmongUsScreen text="Ssoon..." colors="all" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
