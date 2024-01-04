import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-cols-1 space-y-3 lg:grid-cols-4 mx-3 p-4">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster, Year } = curMovie;
            return (
              <Link to={`/movie/${imdbID}`} key={imdbID}>
                <div key={movie.id} >
          <div className='relative h-[400px] w-[300px] rounded-md'>
            <img
              src={Poster}
              alt="poster"
              className='z-0 h-full w-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
            <div className='absolute bottom-4 left-4 text-left'>
              <h1 className='text-lg font-semibold text-white'>{Title}</h1>
              <p className='mt-2 text-sm text-gray-300'>
                {Year}
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
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
