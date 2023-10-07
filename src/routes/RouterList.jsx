import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { Detail } from "../pages/Detail";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
