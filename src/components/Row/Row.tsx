import { useEffect, useState } from 'react';
import axios from '../../axios';
import './Row.css';

interface RowProps {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
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

export default function Row({ title, fetchUrl, isLargeRow = false }: RowProps) {
  const [movies, setMovies] = useState([] as Array<Movie>);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              key={movie?.id}
              src={base_url + (isLargeRow ? movie?.poster_path : movie?.backdrop_path)}
              alt={movie?.name || movie?.original_name}
              style={{ cursor: "pointer" }}
            />
          )))}
      </div>
    </div>
  )
}