import { useState } from 'react';
import { useBookmarkStore } from '../../hooks/useBookmarkStore';
import { Movie } from '../../interfaces/Movie';

export default function ToggleBookmark({ movie }: { movie: Movie }) {
  const store = useBookmarkStore();
  const [, setForceReRender] = useState(0);

  const isBookmarked = store.has(movie.imdbID);

  return isBookmarked ? (
    <button
      onClick={() => {
        store.delete(movie.imdbID);
        setForceReRender(v => v + 1);
      }}
      className={'btn btn_danger mt_md'}
    >
      Remove
    </button>
  ) : (
    <button
      onClick={() => {
        store.set(movie);
        setForceReRender(v => v + 1);
      }}
      className='btn btn_primary mt_md'
    >
      Save
    </button>
  );
}
