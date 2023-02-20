import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
// import {LoginPage} from "./pages/LoginPage";
// import {RegistrationPage} from "./pages/RegistrationPage";
import { CategoryPage } from './pages/CategoryPage';

import { RandomRepeatPage } from './pages/RandomRepeatPage';
import { TechPage } from './pages/TechPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CategoryPage />} />
        <Route path="/html" element={<TechPage />} />
        <Route path="/1" element={<RandomRepeatPage />} />
        <Route path="/:id" element={<RandomRepeatPage />} />
        {/* <Route path="register" element={<RegistrationPage />} /> */}
        {/* <Route path="category" element={<CategoryPage />} /> */}
        <Route
          path="*"
          element={
            <div
              style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h2>Такого маршруту не існує</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

// <Routes>
// 	<Route path="/" element={<CategoryPage />} />
// 	<Route path="/:id" element={<TechPage />} />
// </Routes>
