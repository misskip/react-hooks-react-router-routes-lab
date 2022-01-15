import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div className="Movies">
    <h1>Movies Page</h1>
    {movies.map((movieName) => {
      return <div>
        <ul>{movieName.title}</ul>
        </div>
    })}
    </div>
  );}
export default Movies;
