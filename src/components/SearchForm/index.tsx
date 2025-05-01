import { useCallback } from 'react';
import SearchIcon from '../icons/SearchIcon';
import styles from './styles.module.css';
import clsx from 'clsx';

type Props = {
  value?: string;
  onValueChange?: (val: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchForm({ value, onValueChange, onSubmit }: Props) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onValueChange) onValueChange(e.target.value, e);
    },
    [onValueChange]
  );

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.input_wrap}>
        <div className={styles.icon_wrap}>
          <SearchIcon className={styles.icon} />
        </div>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='Search movie by title'
          className={clsx('input', styles.input)}
        />
      </div>
      <div className={styles.button_wrap}>
        <button type='submit' className={clsx('btn', styles.btn)}>
          Search movie
        </button>
      </div>
    </form>
  );
}
