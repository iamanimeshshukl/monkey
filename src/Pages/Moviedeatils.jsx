import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import { API_URL } from '../Context';

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError("Movie not found");
      }
    } catch (error) {
      setError("Error fetching movie data");
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&i=${id}`);
  }, [id]);

  return (
    <section>
      {error && <p>{error}</p>}
      {movie && (
       
    <><Navbar /><div className="min-h-screen bg-[#ffd148] py-6 flex flex-col justify-center sm:py-12">

          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img className="rounded-3xl shadow-lg" src={movie.Poster} alt="" />
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{movie.Title}</h2>
                  <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.imdbRating}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Series</div>
                  <div className="text-lg text-gray-800">{movie.Year}</div>
                </div>
                <p className=" text-gray-400 max-h-40 overflow-y-hidden">{movie.Actors}</p>
                <div className="flex text-2xl font-bold text-a">$5 Only</div>
              </div>

            </div>
          </div>

        </div><Footer /></>

      )}
      </section>
  );
};

export default Moviedetails;

