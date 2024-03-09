import React from "react";
import { Link } from "react-router-dom";

export default function Projects(props) {
  const styles = {
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ddd", // Faint border
    borderRadius: "5px", // Rounded corners
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "350px"
  };
  return (
    <>
      <Link to={props.url}>
        <div className="card" style={styles}>
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
