import React, { Component } from "react";

// const API = 'http://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=8ad44742de9b1e2df908ca44080e21ca&units=metric';


const APIDaylie = 'https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric';

// 59.334591, 18.063240.

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    console.log('Hej från Mount');
    fetch(APIDaylie)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    console.log('render');
    return (
      <div>
        <div>
          <span>It feels like {this.state.data ? this.state.data.daily[0].clouds : '?'} °C.</span>
          {/* <span> Right now it´s {this.state.data ? this.state.data.weather[0].description : '?'}</span> */}
        </div>
        {/* <div>
          <span>It feels like {this.state.data ? this.state.data.main.feels_like.toFixed(1) : '?'} °C.</span>
          <span> Right now it´s {this.state.data ? this.state.data.weather[0].description : '?'}</span>
        </div> */}
      </div>
    )
  }
}
export default Weather;
