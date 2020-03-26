import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Layout } from './pages/Layout/Layout'
import theme from './shared/CustomTheme/CustomTheme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
       <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
