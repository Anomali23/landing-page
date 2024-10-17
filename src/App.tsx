import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import React from 'react';
import NotFoundPage from '@/pages/NotFoundPage';
import AboutPage from '@/pages/AboutPage';
import TeamsPage from '@/pages/TeamsPage';

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      {/* <Route path="/blogs" element/> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
