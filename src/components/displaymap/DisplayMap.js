import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import car from "./car.png";
import cars from "./cars.png";
import person from "./person2.png";
import getDistance from "geolib/es/getDistance";
import * as geolib from 'geolib';
import "./DisplayMap.css";

export default class DisplayMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pushpin1: [11.08, 76.8317],
      pushpin2: [10.9755, 76.9153],
      pushpin3: [11.078, 77.0372],
      pushpin4: [],
      pushpin1Flag: true,
      pushpin2Flag: true,
      pushpin3Flag: true,
      count1: 0,
      count2: 0,
      count3: 0,
      distanceFlag1: true,
      distanceFlag2: true,
      distanceFlag3: true
    };
  }

  componentDidMount = () => {
    console.log("componentDidMount");

    setInterval(() => this.coOrdinates(), 1000);
    // setInterval(()=>{console.log("setInterval")})
  };

  coOrdinates = () => {

    if (this.state.count1 !== 10 && this.state.pushpin1Flag) {
      this.setState(
        {
          pushpin1: [this.state.pushpin1[0] + 0.01, this.state.pushpin1[1]],
          count1: this.state.count1 + 1
        },
        () => this.getDistance()
      );
    } else if (this.state.pushpin1Flag) {
      this.setState(
        {
          pushpin1Flag: false
        },
        () => this.getDistance()
      );
    } else {
      if (this.state.count1 !== 0 && !this.state.pushpin1Flag) {
        this.setState(
          {
            pushpin1: [this.state.pushpin1[0] - 0.01, this.state.pushpin1[1]],
            count1: this.state.count1 - 1
          },
          () => this.getDistance()
        );
      }else{
        this.setState(
          {
            pushpin1Flag: true
          },
          () => this.getDistance()
        );
      }
    }

    if (this.state.count2 !== 10 && this.state.pushpin2Flag) {
      this.setState(
        {
          pushpin2: [this.state.pushpin2[0] + 0.05, this.state.pushpin2[1]],
          count2: this.state.count2 + 1
        },
        () => this.getDistance()
      );
    } else if (this.state.pushpin2Flag) {
      this.setState(
        {
          pushpin2Flag: false
        },
        () => this.getDistance()
      );
    } else {
      if (this.state.count2 !== 0 && !this.state.pushpin2Flag) {
        this.setState(
          {
            pushpin2: [this.state.pushpin2[0] - 0.05, this.state.pushpin2[1]],
            count2: this.state.count2 - 1
          },
          () => this.getDistance()
        );
      } else {
        this.setState(
          {
            pushpin2Flag: true
          },
          () => this.getDistance()
        );
      }
    }

    if (this.state.count3 !== 10 && this.state.pushpin3Flag) {
      this.setState(
        {
          pushpin3: [this.state.pushpin3[0] - 0.01, this.state.pushpin3[1]],
          count3: this.state.count3 + 1
        },
        () => this.getDistance()
      );
    } else if (this.state.pushpin3Flag) {
      this.setState(
        {
          pushpin3Flag: false
        },
        () => this.getDistance()
      );
    } else {
      if (this.state.count3 !== 0 && !this.state.pushpin3Flag) {
        this.setState(
          {
            pushpin3: [this.state.pushpin3[0] + 0.01, this.state.pushpin3[1]],
            count3: this.state.count3 - 1
          },
          () => this.getDistance()
        );
      } else {
        this.setState(
          {
            pushpin3Flag: true
          },
          () => this.getDistance()
        );
      }
    }
  };

  getDistance = () => {
    if(this.state.pushpin4.length !== 0){
      const distance1 = geolib.getDistance(
          { latitude: this.state.pushpin4[0], longitude: this.state.pushpin4[1] },
          { latitude: this.state.pushpin1[0], longitude: this.state.pushpin1[1] }
      );

      const distance2 = geolib.getDistance(
        { latitude: this.state.pushpin4[0], longitude: this.state.pushpin4[1] },
        { latitude: this.state.pushpin2[0], longitude: this.state.pushpin2[1] }
      );

      const distance3 = geolib.getDistance(
        { latitude: this.state.pushpin4[0], longitude: this.state.pushpin4[1] },
        { latitude: this.state.pushpin3[0], longitude: this.state.pushpin3[1] }
      );
      // console.log("distane1", distance1)
      // console.log("distane2", distance2)
      // console.log("distane3", distance3)

      this.getSmallestDistance(distance1, distance2, distance3)
    }
  }

  getSmallestDistance = (distance1, distance2, distance3) => {
    console.log(distance1, distance2, distance3)

    if(distance1 < distance2 && distance1 < distance3){
      this.setState({
        distanceFlag1: false,
        distanceFlag2: true,
        distanceFlag3: true
      })
    }else if(distance2 < distance1 && distance2 < distance3){
      this.setState({
        distanceFlag1: true,
        distanceFlag2: false,
        distanceFlag3: true
      }) 
    }else{
      this.setState({
        distanceFlag1: true,
        distanceFlag2: true,
        distanceFlag3: false
      }) 
    }
  }

  GetLocationHandled(location) {
    //   const distance1 = geolib.getDistance(
    //     { latitude: location.latitude, longitude: location.longitude },
    //     { latitude: this.state.pushpin1[0], longitude: this.state.pushpin1[1] }
    // );
    //     console.log("distance1 ",distance1)
    console.log(JSON.parse(JSON.stringify(location)).latitude);
    this.setState({
      // getLocationHandledData: JSON.parse(JSON.stringify(location)),
      pushpin4: [
        JSON.parse(JSON.stringify(location)).latitude,
        JSON.parse(JSON.stringify(location)).longitude
      ]
    });
  }

  render() {
    // let car = this.state.car;

    return (
      <div className="maps">
        <ReactBingmaps
          bingmapKey="AiA46R0zI-f-2h_EQwWV4uioX3s6FPHu4iSH2CfHYEGqYhGZz30fNvP5NU64VM6Z"
          center={[11.0168, 76.9558]}
          heading={180}
          getLocation={{
            addHandler: "click",
            callback: this.GetLocationHandled.bind(this)
          }}
          pushPins={[
            {
              location: this.state.pushpin1,
              option: { icon: this.state.distanceFlag1 ? car : cars }
            },
            {
              location: this.state.pushpin2,
              option: { icon: this.state.distanceFlag2 ? car : cars }
            },
            {
              location: this.state.pushpin3,
              option: { icon: this.state.distanceFlag3 ? car : cars }
            },
            {
              location: this.state.pushpin4,
              option: { icon: person }
            }
          ]}
          maxZoom={12}
        ></ReactBingmaps>
        {/* <div id="itineraryContainer" ></div> */}
      </div>
    );
  }
}
