import React from "react";
import { actors } from "../data";

function Actors() {

  return (
    <div className="Actors">
    <h1>Actors Page</h1>
    {actors.map((actorName) => {
      return <div>
        <ul>{actorName.name}</ul>
        </div>
    })}
    </div>
  );}
export default Actors;
