import { useEffect, useState } from 'react';
import requests from '../../requests';
import axios from '../../axios';
import './Banner.css';

const content = {
  playButton: "Play",
  myListButton: "My List",
}

type Movie = {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export default function Banner() {
  const [movie, setMovie] = useState({} as Movie);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(req.data.results[
        Math.floor(Math.random() * (req.data.results.length - 1))
      ]);
      return req;
    };

    fetchData();
  }, []);

  function truncateText(text: string, n: number) {
    return text?.length > n ? text.substring(0, n - 1) + "..." : text;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}>
      <div className="banner__contents">
        <h1 className='banner__title' >{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons" >
          <button className='banner__button' >{content.playButton}</button>
          <button className='banner__button' >{content.myListButton}</button>
          <h1 className="banner__description">{truncateText(movie?.overview, 150)}</h1>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}