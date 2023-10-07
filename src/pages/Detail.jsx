import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../utils/api-endpoints";

export const Detail = () => {
  const [detailMovie, setdetailMovie] = useState("");

  const apikey = process.env.REACT_APP_APIKEY;
  const move = useParams();

  // console.log(detailMovie);
  useEffect(() => {
    movePage();
  }, [move.id]);
  // console.log(detailMovie);

  const movePage = async () => {
    const movie = await axios(`${process.env.REACT_APP_SERVER}${API_ENDPOINT.DETAIL}${move.id}?api_key=${apikey}&append_to_response=videos`);
    setdetailMovie(movie.data);
  };
  const cektrailer = detailMovie && detailMovie.videos.results.find((video) => video.type === "Trailer");
  const trailer = cektrailer ? detailMovie && `https://www.youtube.com/watch?v=${cektrailer.key}` : detailMovie && `https://www.youtube.com/watch?v=${detailMovie.videos.results[0].key}`;
  console.log(trailer);
  return (
    <>
      <div className="w-full bg-center bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path})` }}>
        <div className="absolute bottom-0 flex items-end bg-red-500 w-1/2 h-2/3">
          <h1 className="absolute top-0">{detailMovie.title}</h1>
        </div>
      </div>
    </>
  );
};
