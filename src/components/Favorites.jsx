import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFav } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Favorites(props) {

  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
//ACA NOS QUEDAMOS :)
  return (
    <div>
      <h2>Favorites</h2>
      <hr/>
      {
        favorites.map((fav, index) => (
          <div key={index}>
            <Link to={`/detail/${fav.id}`}>
            <h3>Name: {fav.name}</h3>
            </Link>
            <h4>Rating: {fav.rating}</h4>
            <button onClick={asdasd}>
              {
                fav.completed 
                ? (
                  <span style={{color: "green"}}>Completed</span>
                )
                : <span style={{color: "red"}}>Incompleted</span>
              }
              </button>

              <button onClick={
                () => dispatch(deleteFav(fav.id))
              }>Delete</button>
          </div>
        ))
      }
    </div>
  );
}
