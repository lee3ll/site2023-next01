"use client";
import React, { useEffect, useState } from "react";
import MovieCont from "./MovieCont";
import style from "./page.module.scss";
import ContentTitle from "@/components/title/ContTitle";


const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=9278d13f704ad0fe53c2263b692efd89"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setMovies(data.results);
    };
    getData();
  }, []);
  console.log(movies);
  return (
    <>
    <ContentTitle title="movie" />
    <MovieCont movies={movies} />
    <div>Movie</div>;    
    </>
    )
};
export default Movie;