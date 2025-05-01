import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieById } from '../services/api';
import MovieDetailsRenderer from '../components/MovieDetailsRenderer/Index';
import { Movie } from '../interfaces/Movie';

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const data = await getMovieById(id);
      setMovie(data);
    }

    fetchData();
  }, [id]);

  if (movie == null) return <p>Movie not found</p>;

  return <MovieDetailsRenderer movie={movie} />;
}
