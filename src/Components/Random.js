import React, { Component } from "react";
import axios from "axios";

const API_Key = process.env.REACT_APP_GIPHY_API_KEY;
const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;
class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        };
        //this.handleChange = this.handleChange.bind(this);
        this.ActionLink = this.ActionLink.bind(this);
    }

    ActionLink(e) {
        e.preventDefault();
        axios.get(url)
            .then((response) => {
                const data = response.data.data;
                this.setState({
                    result: data
                });
            })
        .catch((err) => console.log(err));
    }

    render() {
        let display;
        display = (
            <>
                <div>
                    {this.state.result.map((gif, index) => {
                        return (<video key={index} loop autoPlay>
                            <source src={gif.images.looping.mp4} alt="gifImage"
                                width={250} height={250} />
                        </video>);
                    })}
                </div>
            </>
        );
        //  }
        return (
            <div>
                <button onClick={this.ActionLink}>
                    Random
                </button>
                <div className="random">{display}</div>
            </div>
        );
    }
}
export default Random;