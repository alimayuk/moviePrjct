import React, { useEffect, useState } from "react";
import Card from "./LittleCard";
import { Link } from "react-router-dom";


const LittleCategoryCard = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:  import.meta.env.VITE_AUTHORIZATION
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
  const slicepost = post.slice(10, 13);
  return (
    <div className='category-little'>
    <h1 className="category-title">Category</h1>
    <div className="category-card-wrapper">
        <div className="card-left">
            <h1>X <span>CETEGORY</span></h1>
        </div>
       
        <div className="cards">
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
    </div>
        <Link to={"category"} className="btn-movies-little">See All</Link>

</div>
  )
}

export default LittleCategoryCard