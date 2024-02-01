import React from "react";
import Page from "./Components/Page";
import Features from "./Components/Features";
import Footerdata from "./Components/Footerdata";
import Work from "./Components/Work";
import Section1 from "./Components/About/Section1";
import Section2 from "./Components/About/Section2";
import FeatureSection1 from "./Components/Feature/FSection1";

const App = () => {
  return (
    <div className="App">
      <Page />
      <Features />
      <Footerdata />
      <Section1 />
      <Section2 />
      <FeatureSection1 />
      {/* <Work /> */}
    </div>
  );
};

export default App;
