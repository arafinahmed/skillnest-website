import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head/Head';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Service from './Components/Service/Service';
import NeedHelp from './Components/NeedHelp/NeedHelp';
import StayTuned from './Components/StayTuned/StayTuned';

function App() {
  return (
    <div className="main-background">
      <Head></Head>
      <About></About>
      <Products></Products>
      <Service></Service>
      <NeedHelp></NeedHelp>
      <StayTuned></StayTuned>
    </div>
  );
}

export default App;
