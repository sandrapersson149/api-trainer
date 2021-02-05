import React, { Component } from "react";

import styled from 'styled-components';
// const API = 'http://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=8ad44742de9b1e2df908ca44080e21ca&units=metric';


const APIDaylie = 'https://api.openweathermap.org/data/2.5/onecall?lat=59.334591&lon=18.063240&appid=1a2363f2dc8b80e9b8b8781b3756e20e&units=metric';


const StyledDay = styled.div`
margin: 20px;
padding: 10px;
background-color: lightblue;
display:inline-block;
height: 250px;
width: 150px;
text-align:center;
border-radius:2px;
box-shadow: 1px 2px 3px gray;
img {
  width: 60px;
}
`;


class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch(APIDaylie)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  render() {

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const myArr=[];
    for(let i =0; i <= 6; i++){
    var currentDay = new Date(this.state.data ? this.state.data.daily[i].dt * 1000 : '?' );
    var minTemp = this.state.data ? this.state.data.daily[i].temp.min.toFixed(0) : '?';
    var maxTemp = this.state.data ? this.state.data.daily[i].temp.max.toFixed(0) : '?';
    var icon = this.state.data ? this.state.data.daily[i].weather[0].icon : '?';

    // var img = `http://openweathermap.org/img/w/${this.state.data.daily[0].weather[0].icon}.png`;
    var day= currentDay.getDay();
    var date= currentDay.getDate();
    var month= currentDay.getMonth();

    myArr.push(
    <StyledDay key={i}> 
      <h2>{date} {months[month]}</h2>
      <img src={`http://openweathermap.org/img/w/${icon}.png`}/> 
      <h3>{weekdays[day]}</h3>  
      <h5>{minTemp} / {maxTemp}</h5> 
    </StyledDay>)
    }
    
      return (
      <div>{myArr}</div>
    )
  }
}
export default Weather;
