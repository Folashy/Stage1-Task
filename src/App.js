import React from "react";

import "./App.css";
import { AppStyle } from "./AppStyle";
import Footer from "./components/Footer";
import LinkTree from "./components/LinkTree";
import Profile from "./components/Profile";
import SocialSection from "./components/SocialSection";

function App() {
  return (
    <>
      <AppStyle>
        <Profile />
        <LinkTree />
        <SocialSection />
      </AppStyle>
      <Footer />
    </>
  );
}

export default App;
