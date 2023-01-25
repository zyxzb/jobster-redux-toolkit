import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage, LandingPage, RegisterPage, ProtectedRoute } from 'pages';
import { ToastContainer } from 'react-toastify';
import { Layout, Profile, Stats, AllJobs, AddJob } from 'pages/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='/all-jobs' element={<AllJobs />} />
          <Route path='/add-job' element={<AddJob />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
