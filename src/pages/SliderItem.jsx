import React from "react";
import { Link } from "react-router-dom";

export const SliderItem = (props) => {
  const { id, backdrop_path, title, overview } = props.dataSlider;
  return (
    <div className="relative bg-center bg-cover bg-no-repeat min-h-screen m-0 p-0" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})` }}>
      <div className="absolute w-full top-0 left-0 h-full bg-opacity-50 bg-black"></div>
      <div className="absolute bottom-0 flex items-end w-1/2 h-2/3 ml-5">
        <div className="text-white p-4 absolute top-0 font-sans flex flex-col gap-9 items-baseline h-full ">
          <h1 className="text-8xl font-semibold mb-2">{title}</h1>
          <p className="text-2xl text-white mb-4">{overview}</p>
          <Link to={`/detail/${id}`} className="bg-red-600 text-white rounded-full px-4 py-2 mt-4 inline-block font-semibold hover:bg-red-700">
            Watch Trailer
          </Link>
        </div>
      </div>
    </div>
  );
};
