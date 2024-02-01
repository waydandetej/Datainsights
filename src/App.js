import React from "react";
import "./App.css";
import Page from "./Components/Page";
import Features from "./Components/Features";
import Footerdata from "./Components/Footerdata";
import Section1 from "./Components/About/Section1";
import Section2 from "./Components/About/Section2";
import FeatureSection1 from "./Components/Feature/FSection1";
import FeaturePage1 from "./Components/F_pages/FeaturePage1";
import FeaturePage2 from "./Components/F_pages/FeaturePage2";
import FeaturePage3 from "./Components/F_pages/FeaturePage3";

const App = () => {
  return (
    <div className="App">
      <Page />
      <Features />
      <Footerdata />
      <Section1 />
      <Section2 />
      <FeatureSection1 />
      <FeaturePage1 />
      <FeaturePage2 />
      <FeaturePage3 />
      {/* <Work /> */}
    </div>
  );
};

export default App;
