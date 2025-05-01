import { Link as RouterLink } from 'react-router';
import styles from './style.module.css';
import React from 'react';
import clsx from 'clsx';


type Props = { children: React.ReactNode };

function MovieCard({ children }: Props) {
  return <article className={styles.card}>{children}</article>;
}

function MovieCardPoster({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.poster}>
      <div className={styles.aspect_ratio} />
      <img src={src} alt={alt} />
    </div>
  );
}

function MovieCardBody({ children }: Props) {
  return <div className={styles.body}>{children}</div>;
}

function MovieCardTitle({ children }: Props) {
  return <h3 className={styles.title}>{children}</h3>;
}

function MovieCardMeta({ children }: Props) {
  return <p className={styles.meta}>{children}</p>;
}

function MovieCardPrimaryButton({ to, children }: Props & { to: string }) {
  return (
    <RouterLink to={to} className='btn btn_primary'>
      {children}
    </RouterLink>
  );
}

function MovieCardActionButton({
  onPress,
  children,
}: Props & { onPress: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <button onClick={onPress} className={clsx('btn', styles.action_btn)}>
      {children}
    </button>
  );
}

const Root = MovieCard;
const Poster = MovieCardPoster;
const Body = MovieCardBody;
const Title = MovieCardTitle;
const Meta = MovieCardMeta;
const Link = MovieCardPrimaryButton;
const Action = MovieCardActionButton;

export { Root, Poster, Body, Title, Meta, Link, Action };
