import React from 'react';
import './App.css';
import Header from "./findingFalcone/header/header";
import Findingfalcone from "./findingFalcone/main/findingfalcone";
import Footer from "./findingFalcone/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Findingfalcone/>
      <Footer/>
    </div>
  );
}

export default App;
