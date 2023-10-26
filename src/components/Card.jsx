import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../redux/actions";

export default function Card({ episode }) {
  //props {episode: { id: , name: , air_date: , }}

const dispatch = useDispatch();

const handleClick = event => {
const favorite = {
  ...episode,
  completed: false,
  rating: 3
}
dispatch(addFav(favorite));
}

const [isFav, setIsFav] = React.useState(false);
const favorites = useSelector(state => state.favorites);

useEffect(() => {
  favorites.forEach(fav => {
    if(fav.id === episode.id) {
      setIsFav(true);
    }
  })
}, [favorites]); //cuando monto el componente y cuando cambio el e.global pregunto si es fav.

  return (
    <div>
      <h3>Name: {episode.name}</h3>
      <h3>Episode: {episode.episode}</h3>
      <h3>Release date: {episode.air_date}</h3>
      {
        isFav ? null : <button onClick={handleClick}>🤩 Favorite 🤩</button>
      }
      
      <hr />
    </div>
  );
}
