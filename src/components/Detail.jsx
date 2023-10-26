import React from "react";

export default function Detail(props) {

  const {id} = useParams() //si ejecuto useParams me devuelve un obj con propiedad id que me dice que es params, es decir, que hay después de los :, devuelve string siempre

  const favorites = useSelector(state => state.favorites);
  const myFav = favorites.filter(fav => fav.id === Number(id))[0]; // filter => [{...}]

  return (
    <div>
      <h2>Detail</h2>
      <h3>Title: {myFav.name}</h3>
      {
        myFav.character.map(char => (
          <p>
            <a href={char} target="_blank">{char}</a>
          </p>
        ))
      }
    </div>
  );
}
