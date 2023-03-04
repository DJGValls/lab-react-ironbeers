import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';


import './App.css';

function App() {
  return (
    <div className="App">

      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/beers' element={<Beers />}>List Of Beers</Route>
        <Route path='/beers/:beerId' element={<BeerDetails />}>Beer detail</Route>
        <Route path='/beers/random' element={<RandomBeer />}>Home</Route>
        <Route path='/beers/newBeer'>Home</Route>



      </Routes>

    </div>
  );
}

export default App;
