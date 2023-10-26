import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <span>Rick&Morty Episodes</span>
      <br />
      <br />
      <button>
        <NavLink to="/Home"
        style={({isActive}) => isActive ? {color: "coral"} : {color: "grey"}}
        >Home</NavLink>
      </button>


      <button>
        <NavLink to="/Favorites"
        style={({isActive}) => isActive ? {color: "coral"} : {color: "grey"}}
        >Favorites</NavLink>
      </button>
    </div>
  );
}