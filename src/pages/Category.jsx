import React, { useEffect, useState } from "react";
import Card from "../components/LittleCard";
import { Link } from "react-router-dom";

const Category = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_AUTHORIZATION      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setPost(response.results.slice(0, 24))) // Slice the initial 24 results
      .catch((err) => console.error(err));
  }, []);

  const firstCategory = post.slice(10, 13);
  const secondCategory = post.slice(16, 19);
  const thirdCategory = post.slice(0, 3);

  return (
    <div className="movies">
      <div className="container">
        <div className="category-little">
          <h1 className="category-title">Category</h1>
          <div className="category-card-wrapper">
            <div className="card-left">
              <h1>X <span>CATEGORY</span></h1>
            </div>
            <div className="cards">
              {firstCategory.map((user) => (
                <Card
                  key={user.id}
                  title={user.title}
                  image={`https://image.tmdb.org/t/p/w500${user.poster_path}`}
                  year={user.release_date}
                  overview={user.overview}
                  rating={user.vote_average}
                />
              ))}
            </div>
          </div>

          <div className="category-card-wrapper">
            <div className="card-left">
              <h1>Z <span>CATEGORY</span></h1>
            </div>
            <div className="cards">
              {secondCategory.map((user) => (
                <Card
                  key={user.id}
                  title={user.title}
                  image={`https://image.tmdb.org/t/p/w500${user.poster_path}`}
                  year={user.release_date}
                  overview={user.overview}
                  rating={user.vote_average}
                />
              ))}
            </div>
          </div>

          <div className="category-card-wrapper">
            <div className="card-left">
              <h1>Y <span>CATEGORY</span></h1>
            </div>
            <div className="cards">
              {thirdCategory.map((user) => (
                <Card
                  key={user.id}
                  title={user.title}
                  image={`https://image.tmdb.org/t/p/w500${user.poster_path}`}
                  year={user.release_date}
                  overview={user.overview}
                  rating={user.vote_average}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
