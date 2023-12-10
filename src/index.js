import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection/HeroSection';
import GroupMembers from './components/Members/GroupMembers';
import Publications from './components/Publications/Publications';

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'DM Sans',
      'Roboto',
      'Segoe UI',
      'serif',
    ].join(','),
},});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/hero-section" element={<HeroSection />} />
        <Route path="/group-members" element={<GroupMembers />} />
        <Route path="/publications" element={<Publications />} />

      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
