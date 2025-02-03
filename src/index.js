import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import HeroSection from './components/HeroSection/HeroSection';
import GroupMembers from './components/Members/GroupMembers';
import Publications from './components/Publications/Publications';
import Projects from './components/Projects/Projects';
import Resources from './components/Resources/Resources';

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
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>

        <Route path="/" element={<App />} />
        {/* <Route path="/home" element={<App />} /> */}
        <Route path="/group-members" element={<GroupMembers />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/resources" element={<Resources />} />

      </Routes>
      </HashRouter> 
    {/* </BrowserRouter> */}  
    </ThemeProvider>
  </React.StrictMode>
);
