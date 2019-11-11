import React from 'react';

class Weather extends React.Component{
  render(){

    return(
        <div className="weather__info">
        {
	 	this.props.city && <p className="weather__key"> City:
	 		<span className="weather__value"> { this.props.city }, {this.props.country} </span>
	 	</p>
	 }
	 {
	 	this.props.temperature && <p className="weather__key"> Current Temperature:
	 		<span className="weather__value"> { this.props.temperature }	</span>
	 	</p>
	 }
	 {
	 	this.props.temp_max && <p className="weather__key"> Today's Max Temp | Min Temp:
	 		<span className="weather__value"> { this.props.temp_max} | {this.props.temp_min} </span>
	 	</p>
	 }
	 {
	 	this.props.description && <p className="weather__key"> Description:
	 		<span className="weather__value"> { this.props.description } </span>
	 </p>
	 }
        </div>
    );
  };
};


export default Weather;
