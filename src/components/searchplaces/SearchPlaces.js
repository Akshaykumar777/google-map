import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
// import { ReactBingmaps } from 'react-bingmaps';
import './SearchPlaces.css'
// import { HEREMap, Marker, RouteLine } from 'here-maps-react';
import DisplayMap from '../displaymap/DisplayMap'

class SearchPlaces extends Component {
    constructor(props){
        super(props);

        this.state = { 
            placeName: null,
            from: '',
            to: '',
            polyline: null,
            propsFlag: false
        }
    }

    // getFromLocation = async (e) => {
    //     console.log("get locations");

    //     await this.setState({
    //         placeName: e.target.value
    //     })

    //     console.log(this.state.placeName)

    //     if(this.state.placeName.length !== 0) {
    //     axios.get(`https://places.sit.ls.hereapi.com/places/v1/autosuggest?at=40.74917,-73.98529&q=${this.state.placeName}&apiKey=WDxcoSoBnzaI5nboxIKujkCZYVYqCny2GM1ngFnvln8`)
    //     .then(res => {
    //         console.log("location",res.data.results[0].position)
    //         this.setState({
    //             from: res.data.results[0].position
    //         }, () => {console.log(this.state.from)})
    //     })
    // }
    // }

    // getToLocation = async (e) => {
    //         console.log("get locations");
    
    //         await this.setState({
    //             placeName: e.target.value
    //         })
    
    //         console.log(this.state.placeName)
    
    //         // if(this.state.placeName.length !== 0) {
    //         // axios.get(`https://places.sit.ls.hereapi.com/places/v1/autosuggest?at=40.74917,-73.98529&q=${this.state.placeName}&apiKey=WDxcoSoBnzaI5nboxIKujkCZYVYqCny2GM1ngFnvln8`)
    //         // .then(res => {
    //         //     console.log("location",res)
    //         //     this.setState({
    //         //         to: res.data.results[0].position
    //         //     }, () => {console.log(this.state.to)})
    //         // })  }
    // }

    search = () => {
        console.log("search");
        this.setState({
            propsFlag: true
        })
    }

    handleChange= (e) => {
        console.log("handleChange");

        this.setState({
            [e.target.name]: e.target.value,
            propsFlag: false
        })
    }

    render() {
        return (
            <div className="searchplaces">
                
                {/* <div className="search">
               {/* <label>SearchPlaces</label>  */}
                    {/* <input className="source" type="text" name="from" placeholder="source" onChange={this.handleChange}></input>
                    <input className="destination" type="text" name="to" placeholder="destination" onChange={this.handleChange}></input>   
                    <button className="btn" onClick={this.search}>search</button>
                </div> */} 
                <div className="displaymap"><DisplayMap from={this.state.propsFlag ? this.state.from:null} to={this.state.propsFlag ? this.state.to:null}/></div>
            </div>
        )
    }
}

export default withRouter(SearchPlaces)
