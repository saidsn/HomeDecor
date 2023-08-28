import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CollectionSlider.scss";
import SlickSlider from "../slider/Slider";
import Title from "../title/Title";
import axios from "axios";

const CollectionSlider = ({ slidesToShow }) => {
  const settings = {
    slidesToShow: slidesToShow,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const url = "http://localhost:3000";

  const [collections, setCollections] = useState([]);

  const GetCollection = () => {
    axios.get(`${url}/collections`).then((res) => {
      setCollections(res.data);
    });
  };

  useEffect(() => {
    GetCollection();
  }, []);

  return (
    <section id="collection__slider">
      <div className="container">
        <Title>
          <h3 className="title__head">COLLECTIONS</h3>
          <div className="title--action">
            <Link to="/about">SEE ALL</Link>
          </div>
        </Title>
        <SlickSlider settings={settings}>
          {collections.slice(0, 6).map((collection) => {
            return (
              <div className="collection__slider--item" key={collection.id}>
                <img src={collection.image} alt="" />
                <p className="collection__name">{collection.name}</p>
              </div>
            );
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default CollectionSlider;
