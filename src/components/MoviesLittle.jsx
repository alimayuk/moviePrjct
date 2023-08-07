import React, { useEffect, useState } from "react";
import Card from "./LittleCard";
import { Link } from "react-router-dom";

const MoviesLittle = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION
          
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setPost(response.results))
      .catch((err) => console.error(err));
  }, []);
  const slicepost = post.slice(0, 6);
  return (
    <div className="movies-little-wrapper">
      <h1 className="movies-tittle">Movies</h1>
      <div className="cards-wrapper">
            {slicepost &&
              slicepost.map((user) => (

                  <Card
                    key={user.id}
                    title={user.title}
                    image={`https://image.tmdb.org/t/p/w500${user.poster_path}`}
                    year={user.release_date}    
                    overview= {user.overview}        
                    rating={user.vote_average}
                  />
              ))}
        </div>
        <Link to={"movies"} className="btn-movies-little">Watch All</Link>
      </div>
  );
};

export default MoviesLittle;
