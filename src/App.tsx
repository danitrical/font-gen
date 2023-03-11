import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@mui/material';
import { Header } from './components/header';
import { InputField } from './components/input-field';
import { Output } from './components/output';

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ margin: 5}}>
        <InputField />
        <Output />
      </Box>
    </Box>
  );
}

export default App;
