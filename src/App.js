import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

import AppBar from './App_bar.js'
function App() {

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar checked={darkState} handleThemeChange={handleThemeChange} />
      {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
    </ThemeProvider>
  );


  // return (
  //   <AppBar/>
  // );
}

export default App;
