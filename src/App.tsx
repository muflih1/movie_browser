import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Index';
import Spinner from './components/Spinner';

const Index = lazy(() => import('./pages/Index'));
const Details = lazy(() => import('./pages/Details'));
const Bookmark = lazy(() => import('./pages/Bookmark'));

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/info/:id' element={<Details />} />
            <Route path='/bookmarks' element={<Bookmark />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
