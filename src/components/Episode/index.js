import React from "react";
import "./style.css";

const Episode = (props) => {
  return (
    <div className="eps-card">
      <img
        src={`./images/episodes/${props.result.id}.jpg`}
        className="eps-img"
        alt={props.result.name}
      />
      <div className="eps-info">
        <div className="eps-name">
          {props.result.episode}: {props.result.name}
        </div>
        <div className="eps-date">Aired On: {props.result.air_date}</div>
      </div>
    </div>
  );
};
export default Episode;
