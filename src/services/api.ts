import axios from "axios"

const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const searchMoviesByTitle = async (query: string) => {
  const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`)

  return data
}

export const getMovieById = async (id: string) => {
  const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)

  return data
}