import React from "react";
import Slider from "@/components/slider/Slider";
import Intro from "@/components/intro/Intro";
import Member from "@/components/member/Member";
import Portfolio from "@/components/portfolio/Portfolio";
import Youtube from "@/components/youtube/Youtube";
import Unsplash from "@/components/unsplash/Unsplash";
import Movie from "@/components/movie/Movie";

const Home = () => {
  return (
    <>
      <Slider attr="slider__wrap gmarket5 section" />
      <Intro attr="intro__wrap section gmarket5 bg-blue" />
      <Member attr="member__wrap section gmarket5 center" />
      <Portfolio attr="port__wrap section gmarket5 center bg-blue" />
      <Youtube attr="youtube__wrap gmarket5 section" />
      <Unsplash attr="unsplash__wrap gmarket5 section bg-blue" />
      <Movie attr="movie__wrap gmarket5 section" />
    </>
  );
};

export default Home;
