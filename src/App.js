import React, { Component } from 'react';
import './App.css';
import SearchCard from './Components/SearchField';
import Trending from './Components/Trending';
import Random from './Components/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GIPHY ASSIGNMENT</h1>
        <h1>Trending Gifs</h1>
        <Trending />
        <br></br>
        <br></br>
        <h1>Search For Gifs By Entering A Term</h1>
        <SearchCard />
        <br></br>
        <br></br>
        <h1>Click to Display A Random Gif</h1>
        <Random />
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default App;