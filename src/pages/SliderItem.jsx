import React from "react";

export const SliderItem = (props) => {
  return (
    <div className="w-full relative bg-center bg-cover bg-no-repeat min-h-screen m-0 p-0" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.dataSlider.backdrop_path})`}}>
        <div className="absolute w-full top-0 left-0 h-full bg-opacity-50 bg-black"></div>
    </div>
  );
};
