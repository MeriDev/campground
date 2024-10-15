import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

interface campContextProps {
  children: React.ReactNode;
}

export const campContext = createContext();

const CampProvider = ({ children }: campContextProps) => {
  const [campgrounds, setCampgrounds] = useState([]);

  return (
    <campContext.Provider value={{ campgrounds, setCampgrounds }}>
      {children}
    </campContext.Provider>
  );
};

export default CampProvider;
