import { Movie } from '../../interfaces/Movie';
import ToggleBookmark from '../ToggleBookmark/Index';
import styles from './styles.module.css';

type Props = { movie: Movie };

export default function MovieDetailsRenderer({ movie }: Props) {
  return (
    <div className={styles.container}>
      <img src={movie?.Poster} alt={movie?.Title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie?.Title}</h1>
        <p>
          <strong>Genre:</strong> {movie?.Genre}
        </p>
        <p>
          <strong>Director:</strong> {movie?.Director}
        </p>
        <p>
          <strong>Plot:</strong> {movie?.Plot}
        </p>
        <div className={styles.ratings}>
          <strong>Ratings:</strong>
          <ul>
            {movie?.Ratings.map((rating, index) => (
              <li key={index}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
        <ToggleBookmark movie={movie} />
      </div>
    </div>
  );
}
