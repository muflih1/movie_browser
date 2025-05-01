export interface Movie {
  Title: string;
  Poster: string;
  Genre: string;
  Director: string;
  Plot: string;
  Ratings: { Source: string; Value: string }[];
  imdbID: string
  Year: string
}