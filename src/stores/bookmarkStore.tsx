import { Movie } from "../interfaces/Movie";

class BookmarksStore {
  private static _instance: BookmarksStore | null;
  private _storageKey: string;
  private declare _store: Map<string, Movie>;
  private _subscribers: Set<() => void>;

  constructor() {
    this._storageKey = '_MoviesBookmark';
    this._store = new Map(this._load());
    this._subscribers = new Set();
  }

  static getInstance() {
    if (this._instance == null) {
      this._instance = new BookmarksStore();
    }
    return this._instance;
  }

  private _load(): [string, Movie][] {
    const raw = localStorage.getItem(this._storageKey);
    try {
      const parsed = JSON.parse(raw || '[]') as Movie[];
      return parsed.map(movie => [movie.imdbID, movie]);
    } catch {
      return [];
    }
  }

  private _notify() {
    for (const callback of this._subscribers) {
      callback();
    }
  }

  subscribe(callback: () => void) {
    console.log(callback)
    this._subscribers.add(callback);
    return () => this._subscribers.delete(callback);
  }

  private _persist() {
    const values = Array.from(this._store.values());
    localStorage.setItem(this._storageKey, JSON.stringify(values));
    this._notify();
  }

  set(movie: Movie) {
    this._store.set(movie.imdbID, movie);
    this._persist();
  }

  get(imdbID: string) {
    return this._store.get(imdbID);
  }

  has(imdbID: string) {
    return this._store.has(imdbID);
  }

  delete(imdbID: string) {
    const result = this._store.delete(imdbID);
    this._persist();
    return result;
  }

  clear() {
    this._store.clear();
    this._persist();
  }

  keys() {
    return this._store.keys();
  }

  values() {
    return this._store.values();
  }

  entries() {
    return this._store.entries();
  }

  forEach(callback: (value: Movie, key: string) => void) {
    this._store.forEach(callback);
  }

  get size() {
    return this._store.size;
  }
}

export default BookmarksStore.getInstance();
