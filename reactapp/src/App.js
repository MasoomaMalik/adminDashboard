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
      <ThemeProvider theme={MyColorTheme}>

    <AppRouter/>
      </ThemeProvider>
    </>
  );
}

export default App;
