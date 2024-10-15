import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Campground from './pages/Campground';
import EditCampground from './components/EditCampground';
import AddCampground from './pages/AddCampground';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<Dashboard />} />
          <Route path="/campgrounds/add" element={<AddCampground />} />
          <Route path="/campgrounds/:id" element={<Campground />} />
          <Route path="/campgrounds/:id/edit" element={<EditCampground />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
