import React from "react";
import MovieItem from "./MovieItem";
import style from "./page.module.scss"

const MovieCont = ({ movies }) => {
  return (
    <div className={`${style.movie__cont} container`}>
    {/* <div className={style.movie__cont + " container SCoreDream"}></div> 위와 같은역할*/}
      <ul>
        {movies.map((movie, indxe) => (
            <MovieItem key={indxe} movie={movie} />
        ))};
      </ul>
    </div>
  );
};
export default MovieCont;
