import { Link } from 'react-router';
import styles from './styles.module.css';
import BookmardIcon from '../icons/BookmardIcon';
import clsx from 'clsx';

export default function Navbar() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link to={'/'} className={styles.logo}>MoviesDB</Link>
        <Link to={'/bookmarks'} className={clsx('btn', styles.btn)}>
          <BookmardIcon className={styles.icon} />
          <span>Bookmarks</span>
        </Link>
      </div>
    </header>
  );
}
