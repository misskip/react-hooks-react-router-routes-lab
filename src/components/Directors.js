import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div className="Directors">
    <h1>Directors Page</h1>
    {directors.map((directorName) => {
      return <div>
        <ul>{directorName.name}</ul>
        </div>
    })}
    </div>
  );}
export default Directors;
