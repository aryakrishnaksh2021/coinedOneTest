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
      primary: {
        main: darkState ? '#fff' : '#3076de'
      },
      background :{ 
        default: darkState ? '#303030' : '#feefdd'
      }
      // darkState?
      
      //  type: "dark",
      //   primary: red,
      //   secondary: {
      //     main: '#b9f6ca',
      //   }, :
      //   type: "dark",
      //   primary: red,
      //   secondary: {
      //     main: '#b9f6ca',
      //   },
      
    },
   
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar checked={darkState} handleThemeChange={handleThemeChange} style={{backgroundColor:'#f00'}}/>
      {/* <Switch checked={darkState} onChange={handleThemeChange} /> */}
    </ThemeProvider>
  );


  // return (
  //   <AppBar/>
  // );
}

export default App;
