import React, { Component } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const trendingURL = `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=6`;

class Trending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gifs: [],             
        };
    }

    componentDidMount() {
        axios.get(trendingURL, {params:{key: apiKey}})
        .then((response)=>{
            const data = response.data;
            const gifs = data.data;
            console.log(gifs);
            this.setState({gifs});
        })
        .catch((err) => {
            console.log(err);
            this.setState({gifs:[]});
        });
    };
    
    
    render() {
        let gifList;
        if(this.state.gifs.length===0){
            gifList = <></>;
        }else{
            gifList = (
                <div>
                    {this.state.gifs.map((gif, index)=>{
                        return (<video key = {index} loop autoPlay>
                            <source src={gif.images.looping.mp4} alt= "gifImage"
                            width={250} height = {250} />
                            </video>);
                    })}
                </div>
            );
        }
        return(
            <div className = "trending">
                {gifList}
            </div>
        );
    }
}
export default Trending;