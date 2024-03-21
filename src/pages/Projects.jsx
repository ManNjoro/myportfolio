import React from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <>
      <Link to={props.url}>
        <div className="card">
          <img src={props.img} className="card-img-top" alt="project photo" />
          <div class="card-body">
            <h2 className="card-title text">{props.name}</h2>
            <p className="card-text text">{props.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
