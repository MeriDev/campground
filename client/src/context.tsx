// import axios from 'axios';
// import React, { createContext, useEffect, useState } from 'react';

// type campContextProps = {
//   children: React.ReactNode;
// };
// type campgroundType = {
//   _id: string;
//   title: string;
//   location: string;
//   description: string;
// };

// export const campContext = createContext(null);

// const CampProvider = ({ children }: campContextProps) => {
//   const [campgrounds, setCampgrounds] = useState<campgroundType[]>([]);

//   useEffect(() => {
//     const getCampgrounds = async () => {
//       try {
//         const res = await axios.get('/api/campgrounds');
//         setCampgrounds(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getCampgrounds();
//   }, []);

//   return (
//     <campContext.Provider
//       value={{
//         campgrounds,
//         setCampgrounds,
//       }}
//     >
//       {children}
//     </campContext.Provider>
//   );
// };

// export default CampProvider;
