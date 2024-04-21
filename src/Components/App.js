import React from "react";
import Login from "./LoginPage";
import Landing from "./landing";
import Logo from "./logo";
import Plan from "./planning";
import Card from "./Cards";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Landing />
      <Logo />
      <Card />
      <Plan />
      <Footer />
    </div>
  );
}

export default App;