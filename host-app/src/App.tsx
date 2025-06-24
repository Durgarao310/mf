import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <nav className="flex gap-4 justify-center my-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-green-600 hover:underline">About</Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
