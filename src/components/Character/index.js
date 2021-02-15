import React from "react";
import "./style.css";

const Character = (props) => {
  let name = "";
  if (props.result.name.length > 15) {
    let nameArr = props.result.name.split(" ");
    for (let i = 0; i < nameArr.length; i++) {
      let tempName = name;
      name = name + nameArr[i] + " ";
      if (name.length > 22) {
        name = tempName;
        break;
      }
    }
  } else {
    name = props.result.name;
  }
  return (
    <button
      className="char-card"
      onContextMenu= {(e)=>{e.preventDefault();}}
    >
      <div className="face front">
        <div>
          <img
            className="character-img"
            src={props.result.image}
            alt={props.result.name}
            onContextMenu= {(e)=>{e.preventDefault();}}
          />
        </div>
        <div className="name-div">
          <h3 className="char-name">{name}</h3>
        </div>
      </div>

      <div className="face back">
        <div className="card-content">
          <div className="info-heading">NAME</div> {props.result.name} <br />
          <br />
          <div className="info-heading">STATUS</div> {props.result.status}{" "}
          <br />
          <br />
          <div className="info-heading">SPECIES</div> {props.result.species}{" "}
          <br />
          <br />
          <div className="info-heading">ORIGIN</div> {props.result.origin.name}
        </div>
      </div>
    </button>
  );
};

export default Character;
