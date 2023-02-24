import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { CategoryPage } from './pages/CategoryPage';
import { RandomRepeatPage } from './pages/RandomRepeatPage';
import { TechPage } from './pages/TechPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CategoryPage />} />
        <Route path="/:id" element={<TechPage />} />
        <Route path="/random" element={<RandomRepeatPage />} />
      </Route>
    </Routes>
  );
};
