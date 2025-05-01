import { useSyncExternalStore } from 'react';
import bookmarkStore from '../stores/bookmarkStore';

export function useBookmarkStore() {
  return useSyncExternalStore(
    bookmarkStore.subscribe.bind(bookmarkStore),
    () => bookmarkStore
  );
}
