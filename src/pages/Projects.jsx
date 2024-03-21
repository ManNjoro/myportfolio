import React from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <>
      <div className="card">
        <Link to={props.url}>
          <img src={props.img} className="card-img-top" alt="project photo" />
        </Link>
        <div className="card-body">
          <h2 className="card-title text">{props.name}</h2>
          <p className="card-text text">{props.description}</p>
          <input type="checkbox" className="expand-btn" />
        </div>
      </div>
    </>
  );
}
