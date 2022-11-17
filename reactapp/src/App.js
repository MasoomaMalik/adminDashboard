import logo from './logo.svg';
import './App.css';
import AppRouter from './config/route';
import {
  ThemeProvider,
} from "@mui/material";
import MyColorTheme from './components/myColorTheme';

function App() {
  return (
    <>
    <h1></h1>
      <ThemeProvider theme={MyColorTheme}>

    <AppRouter/>
      </ThemeProvider>
    </>
  );
}

export default App;
