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
      <div className="relative z-50 top-0">
        {/* Header */}
        <div className="flex justify-between items-center h-[75px] mx-7 relative">
          <Link to="/" className="font-serif text-[#dd060b] font-bold sizemovielist">
            Movielist
          </Link>
          <div className="flex h-2/3 gap-2 w-[200px] justify-between">
            <button className="items-center border border-red-600 flex w-1/2 justify-center rounded-full text-red-500 ont-semibold">Login</button>
            <button className="bg-red-600 items-center flex w-1/2 justify-center rounded-full text-white font-semibold">Register</button>
          </div>
        </div>
      </div>
      {detailMovie && (
        <div className="absolute h-screen top-0 left-0 w-[100%] z-0">
          {/* Poster */}
          <div
            className="w-full bg-center bg-cover bg-no-repeat min-h-screen"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path})`,
            }}
          >
            <div className="absolute z-0 top-0 w-full h-full bg-opacity-50 bg-black"></div>
          </div>
          {/* Isi detail movie */}
          <div className="absolute bottom-0 w-1/2 h-2/3 ml-7">
            <div className="text-white absolute top-0 font-sans flex flex-col gap-5 items-baseline h-full">
              <h1 className="text-8xl font-semibold mb-2">{detailMovie.title}</h1>
              <p className="text-2xl text-white mb-4">{detailMovie.genres.map((genre) => genre.name).join(", ")}</p>
              <p className="text-white mt-4 text-2xl w-[]">{detailMovie.overview}</p>
              <p className="text-white mt-4 text-2xl">Rating: {detailMovie.vote_average} / 10</p>
              <p className="text-white mt-4 text-2xl">Release Date: {detailMovie.release_date}</p>
              {trailer && (
                <a href={trailer} target="_blank" rel="noopener noreferrer" className="w-[20%] flex justify-center bg-red-600 text-white rounded-full px-4 py-2 mt-4 font-semibold hover:bg-red-700">
                  Watch Trailer
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
