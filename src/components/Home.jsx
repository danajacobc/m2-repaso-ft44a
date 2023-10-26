import React from "react";
import axios from "axios";
import Card from "./Card";

export default function Home(props) {

const [episodes, setEpisodes] = React.useState([]); //guardo los episodios en el array

React.useEffect(() => {
  axios(`https://rickandmortyapi.com/api/episode`) //me devuelve un obj con la prop data:respuesta
   .then(response => setEpisodes(response.data)) //estoy guardando un obj{info:..., results:[{1},{2}...]}
   .catch(error => console.log(error))
}, [])

  return (
    <div>
      <h2>Episodes</h2>
      <hr />
      {
        episodes.results?.map((episode, index) => <Card key={index} episode={ episode } />) //el signo ?: si existe mapealo, sino no
      }
    </div>
  );
}
