import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout"; 
import Movies from '../pages/movies/Movies'
import Blogs from '../pages/blog/Blogs'
import Home from '../pages/home/Home'
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/profile/Profile';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<MainLayout />}>
    {/* nested routes */}
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />  
                
         {/* Protected Route */}
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />

    </Route>
  </Routes>

  );
};

export default AppRoutes;
