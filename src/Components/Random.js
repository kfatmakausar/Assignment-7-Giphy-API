import React, { Component } from "react";
import axios from "axios";

const API_Key = process.env.REACT_APP_GIPHY_API_KEY;
const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: '',
    };
    this.handleRandom = this.handleRandom.bind(this);
  }

  handleRandom() {
    axios.get(url, { params: { key: API_Key } })
      .then((response) => {
        const rand = response.data.data;
        this.setState({ 
            gif: rand.images.looping.mp4 
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let display;
    if (!this.state.gif) {
      display = <></>;
    } else {
      display = (
        <>
          {<video id="random gif" loop autoPlay>
            <source
              src={this.state.gif}
              alt="gifImage"
              width={250}
              height={250}
            />
          </video> }
        </>
      );
    }
    return (
      <div>
        <button onClick={this.handleRandom}>Random</button>
        <div className="random">{display}</div>
      </div>
    );
  }
}

export default Random;