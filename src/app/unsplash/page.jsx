"use client";
import React, { useEffect, useState } from "react";
import ContentTitle from "@/components/title/ContTitle";
import UnsplashCont from "./UnsplashCont";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.unsplash.com/photos?client_id=xl3XdD26yx6VUDJS2flUAuj_0xNZpW0a_yfYiBdOX7Y&per_page=30",
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setImages(data);
    };
    getData();
  }, []);
  console.log(images);

  return (
    <>
      <ContentTitle title="unsplash" />
      <UnsplashCont images={images} />
    </>
  );
};

export default Unsplash;
