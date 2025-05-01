import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieById } from '../services/api';
import MovieDetailsRenderer from '../components/MovieDetailsRenderer/Index';
import { Movie } from '../interfaces/Movie';
import Spinner from '../components/Spinner';

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      setLoading(true)
      const data = await getMovieById(id);
      setMovie(data);
      setLoading(false)
    }

    fetchData();
  }, [id]);

  if (loading) return <Spinner />
  if (movie == null) return <p>Movie not found</p>;

  return <MovieDetailsRenderer movie={movie} />;
}
