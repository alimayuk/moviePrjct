import React from "react";

const Card = ({ image, title, year, overview, rating }) => {
  return (
   <div className="card">
    <div className="card-front">
    <img src={image} alt="" />
    <div className="content">
      <p className="content-title">{title}</p>
      <p>{year}</p>
      <p>{rating}</p>
    </div>
    </div>
    <div className="card-back">
      <h1>Overview</h1>
      <p>{overview}</p>
    </div>

   </div>
  );
};

export default Card;
