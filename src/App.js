import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'
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
  pageSize = 15;
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <BrowserRouter>
        <LoadingBar
          color='#ffffff'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />
          }></Route>
          <Route exact path="/business" element={
            <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />
          }></Route>
          <Route exact path="/entertainment" element={
            <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />
          }></Route>
          <Route exact path="/health" element={
            <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />
          }></Route>
          <Route exact path="/science" element={
            <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />
          }></Route>
          <Route exact path="/sports" element={
            <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />
          }></Route>
          <Route exact path="/technology" element={
            <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />
          }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
