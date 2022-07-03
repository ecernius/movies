import React from "react";
import { Rating } from "react-simple-star-rating";

const Comp = (movies, key) => {
  return (
    <div>
      <div className="card">
        <img src={movies.movies.image} alt="" />
        <h2>{movies.movies.titleEng}</h2>
        <h2>{movies.movies.genre}</h2>
        <Rating ratingValue={movies.movies.imdbRating * 10} readonly={true} />
        <h2>{movies.movies.duration}</h2>
      </div>
      ;
    </div>
  );
};
export default Comp;
