import React, { useEffect, useState } from 'react';
import Card from '../components/LittleCard';

const Movies = () => {
  const [post, setPost] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:   import.meta.env.VITE_AUTHORIZATION   },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setPost(response.results))
      .catch((err) => console.error(err));
  }, []);

  // Filtreleme işlemini yapacak fonksiyon
  const handleFilter = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
  };

  // Filtrelenmiş filmleri döndürecek fonksiyon
  const getFilteredMovies = () => {
    return post.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase().trim())
    );
  };

  return (
    <div className='movies'>
      <div className="container">
        <div className="movies-head">
          <h1 className='movies-title'>MOVIES</h1>
          <input
            type="search"
            value={searchText}
            onChange={handleFilter}
          />
        </div>
        <div className="cards-wrapper">
        {getFilteredMovies().length > 0 ? (
  getFilteredMovies().map((movie) => (
    <Card
      key={movie.id}
      title={movie.title}
      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      year={movie.release_date}
      overview={movie.overview}
      rating={movie.vote_average}
    />
  ))
) : (
  <div className='notMovie'> 
     <div className="card">
     <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" style={{ fill: "rgba(110, 110, 110, 1)", transform: "", msFilter: "" }}>
    <path d="M4 19h10.879L2.145 6.265A1.977 1.977 0 0 0 2 7v10c0 1.103.897 2 2 2zM18 7c0-1.103-.897-2-2-2H6.414L3.707 2.293 2.293 3.707l18 18 1.414-1.414L18 16.586v-2.919L22 17V7l-4 3.333V7z"></path>
  </svg>
     </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Movies;
