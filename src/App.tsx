import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Index';
import Bookmark from './pages/Bookmark';

const Index = lazy(() => import('./pages/Index'));
const Details = lazy(() => import('./pages/Details'));

export default function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/info/:id' element={<Details />} />
          <Route path='/bookmarks' element={<Bookmark />} />
        </Routes>
      </div>
    </>
  );
}
