import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Favorites from './pages/favourites/Favourites';

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/recipe-item/:id' element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
