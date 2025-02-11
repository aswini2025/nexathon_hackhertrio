import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Form from "./Form";
import NewMainPage from "./NewMainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewMainPage />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/formpage" element={<Form />} />
    </Routes>
  );
}

export default App;