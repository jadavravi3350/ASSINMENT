import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './About';
import Home from './Home';
import Servies from './Servies';
const About1 = lazy(() => import('./About'));
const Home1 = lazy(() => import('./Home'));
const Servies1 = lazy(() => import('./Servies'));


function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link className="mx-5" to="/About">About</Link>
        <Link to="/Servies">servies</Link>

        <Routes>
          <Route path="/" element={<Suspense fallback={<Home/>}><Home1/></Suspense>}></Route>
          <Route path="/About" element={<Suspense fallback={<About/>}><About1 /></Suspense>}></Route>
          <Route path="/Servies" element={<Suspense fallback={<Servies/>}><Servies1/></Suspense>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
