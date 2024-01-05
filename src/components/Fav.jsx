import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Fav = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=(your_api_key)")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
      .catch(error => console.error('Error fetching popular movies:', error));
  }, []);

  return (
    <>
      {popularMovies.map(movie => (
          <Link to="/video">
        <div key={movie.id} >
          <div className='relative h-[400px] w-[300px] rounded-md'>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path || ''}`}
              alt={movie.original_title || 'Movie Poster'}
              className='z-0 h-full w-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
            <div className='absolute bottom-4 left-4 text-left'>
              <h1 className='text-lg font-semibold text-white'>{movie.original_title || ''}</h1>
              <p className='mt-2 text-sm text-gray-300'>
                {movie.release_date || ''}
              </p>
              <button
                onClick={() => {
                  // Handle button click here
                }}
                className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'
              >
                View Movie →
              </button>
            </div>
          </div>
        </div>
        </Link >
      ))}
    </>
  );
};

export default Fav;
