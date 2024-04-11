import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MovieDetails = React.lazy(() => import("../pages/MovieDetails"));
const Error = React.lazy(() => import("../pages/Error"));
import { Suspense } from "react";

function MainRoutes() {
  return (
    <Routes>
      {/* routes contain multiple route */}
      <Route path="/" element={<Home />} />

      <Route
        path="/movie/:id"
        element={
          <Suspense fallback ={<div>Loading...</div>}>
            <MovieDetails />
          </Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
