import React, { Component } from 'react';
import './App.css';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import News from './componets/News';

export class App extends Component {
  render() {
    return(
      <>
        <Navbar/>
        <News pageSize={15} country="in" category="science"/>
        <Footer/>
      </>
    );
  }
}

export default App;
