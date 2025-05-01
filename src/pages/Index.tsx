import { useCallback, useEffect, useState } from 'react';
import * as Card from '../components/MovieCard';
import { useSearchParams, useNavigate } from 'react-router';
import { searchMoviesByTitle } from '../services/api';
import SearchForm from '../components/SearchForm';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import { Movie } from '../interfaces/Movie';

export default function Index() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const queryParam = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(queryParam);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (query.trim() === '') return;
      setMovies([]);
      navigate(`/?q=${encodeURIComponent(query)}`);
    },
    [query, navigate]
  );

  useEffect(() => {
    if (!queryParam) return;

    const fetchMovies = async () => {
      setLoading(true);
      const data = await searchMoviesByTitle(queryParam);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [queryParam]);

  return (
    <div>
      <h1 className='logo_title'>Browse movies</h1>
      <SearchForm
        onSubmit={handleSubmit}
        value={query}
        onValueChange={setQuery}
      />

      <hr className='hr' />

      <div className='grid'>
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <MovieCardSkeleton key={`Skeleton$${++i}`} />
          ))}
        {movies.length > 0 &&
          movies.map((movie, i) => (
            <Card.Root key={`${movie.Title}$${++i}`}>
              <Card.Poster src={movie.Poster} alt={movie.Title} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Meta>{movie.Year}</Card.Meta>
                <Card.Link to={`/info/${movie.imdbID}`}>More info</Card.Link>
              </Card.Body>
            </Card.Root>
          ))}
      </div>
    </div>
  );
}
