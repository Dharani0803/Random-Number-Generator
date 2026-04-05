import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { useState } from "react";
import RandomNumber from "./components/RandomNumber";

function App(){
    
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <RandomNumber/>
      <Footer/>
    </div>
  );
}

export default App
