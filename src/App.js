import React, { Component } from 'react';
import './App.css';
import Footer from './componets/Footer';
import Navbar from './componets/Navbar';
import News from './componets/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <News key="general" pageSize={15} country="in" category="general" />
          }></Route>
          <Route exact path="/business" element={
            <News key="business" pageSize={15} country="in" category="business" />
          }></Route>
          <Route exact path="/entertainment" element={
            <News key="entertainment" pageSize={15} country="in" category="entertainment" />
          }></Route>
          <Route exact path="/health" element={
            <News key="health" pageSize={15} country="in" category="health" />
          }></Route>
          <Route exact path="/science" element={
            <News key="science" pageSize={15} country="in" category="science" />
          }></Route>
          <Route exact path="/sports" element={
            <News key="sports" pageSize={15} country="in" category="sports" />
          }></Route>
          <Route exact path="/technology" element={
            <News key="technology" pageSize={15} country="in" category="technology" />
          }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
