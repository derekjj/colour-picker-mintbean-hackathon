import React, { useState } from "react";
import "./App.css";
import Palette from "./Palette";
import NavBar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);

  return (
    <div className="App">
      <NavBar
        changeSetting={changeSetting}
        changeVariation={changeVariation}
        changeHex={changeHex}
        changeSettingValue={changeSettingValue}
        settingValue={settingValue}
      />
      <Palette
        settingValue={settingValue}
        setting={setting}
        variation={variation}
        hex={hex}
      />
      <Footer hex={hex} changeHex={changeHex} />
    </div>
  );
}

export default App;
