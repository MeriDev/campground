import axios from 'axios';

import { useState, useEffect } from 'react';

const Home = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCampgrounds = async () => {
      try {
        const res = await axios.get('api/campgrounds');
        const data = await res.data;
        setCampgrounds(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCampgrounds();
  }, []);

  return (
    <div>
      {campgrounds &&
        campgrounds.map(campground => (
          <div key={campgrounds.id}>{campground.title}</div>
        ))}
    </div>
  );
};

export default Home;
