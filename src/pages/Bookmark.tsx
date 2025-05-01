import { useState } from 'react';
import { useBookmarkStore } from '../hooks/useBookmarkStore';
import * as Card from '../components/MovieCard';
import useConfirm from '../hooks/useConfirm';
import { Link } from 'react-router';

export default function Bookmark() {
  const store = useBookmarkStore();
  const movies = Array.from(store.values());
  const [, setForceReRender] = useState(0);
  const [confirm, Dialog] = useConfirm(
    'Are you sure?',
    'This will be permently deleted from your bookmarks.'
  );

  return (
    <div>
      <h1>Bookmarks</h1>
      {movies.length === 0 ? (
        <div className='text_center'>
          <h3>No bookmarks yet.</h3>
        </div>
      ) : (
        <div className='grid'>
          {movies.map(movie => (
            <Card.Root key={movie.imdbID}>
              <Card.Poster src={movie.Poster} alt={movie.Title} />
              <Card.Body>
                <Card.Title>
                  <Link
                    to={`/info/${movie.imdbID}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {movie.Title}
                  </Link>
                </Card.Title>
                <Card.Meta>{(movie as any).Year}</Card.Meta>
                <Card.Action
                  onPress={async () => {
                    if (!(await confirm())) return;
                    store.delete(movie.imdbID);
                    setForceReRender(v => v + 1);
                  }}
                >
                  Remove
                </Card.Action>
                <Dialog />
              </Card.Body>
            </Card.Root>
          ))}
        </div>
      )}
    </div>
  );
}
