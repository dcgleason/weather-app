import React from 'react';
import Form from './components/form.js'
import Weather from './components/weather.js'
const API_KEY = "7194ee775a0fdeab9d3c86392856d1ea";

class App extends React.Component {

  state = {
    temperature: undefined,
    temp_max: undefined,
    temp_min: undefined,
    city: undefined,
    country: undefined,
    icon: undefined,
    description: undefined,
    error: undefined

  };

  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
      const data  = await api_call.json();

      console.log(data);
      this.setState({
        temperature: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        error: ""

      }  );
  };

  render(){
    return(
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <h1 >Weather Finder</h1>

                  </div>
                  <div className="col-xs-7 form-container">
                <Form getWeather = {this.getWeather}/>
                <Weather
                    temperature = {this.state.temperature}
                    temp_max  = {this.state.temp_max}
                    temp_min = {this.state.temp_min}
                    city = {this.state.city}
                    country = {this.state.country}
                    description = {this.state.description}
                    icon = {this.state.icon}
                    />
                    </div>


                </div>
              </div>
            </div>
          </div>

      </div>
    )

    };
};






export default App;
