import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList } from "../pages/MovieList";
import { Detail } from "../pages/Detail";
import SearchResult from "../pages/SearchResult";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
