import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {

const userName = useSelector(state => state.user.name);

  return (
    <div>
      <span>Rick&Morty Episodes | Actual User: {userName} </span>
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