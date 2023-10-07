import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../utils/api-endpoints";

export const Detail = () => {
  const [detailMovie, setDetailMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const apikey = process.env.REACT_APP_APIKEY;
  const { id } = useParams();

  useEffect(() => {
    // Fungsi untuk mendapatkan data detail film
    const fetchDetailMovie = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}${API_ENDPOINT.DETAIL}/${id}`,
          {
            params: {
              api_key: apikey,
              append_to_response: "videos",
            },
          }
        );
        setDetailMovie(response.data);

        // Temukan trailer dalam video results, jika ada
        const trailerVideo = response.data.videos.results.find(
          (video) => video.type === "Trailer"
        );

        if (trailerVideo) {
          setTrailer(`https://www.youtube.com/watch?v=${trailerVideo.key}`);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchDetailMovie();
  }, [apikey, id]);

  return (
    <>
      {detailMovie && (
        <div className="bg-white p-0">
          <div className="relative" style={{ height: "100vh", overflow: "hidden" }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={detailMovie.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: "100vh" }}
            />
          </div>
          <h1 className="text-2xl font-semibold mt-4">{detailMovie.title}</h1>
          <p className="text-gray-600">Release Date: {detailMovie.release_date}</p>
          {trailer && (
            <a href={trailer} target="_blank" rel="noopener noreferrer">
              Watch Trailer
            </a>
          )}
          <Link to="/">Back to Movie List</Link>
        </div>
      )}
    </>
  );
};
