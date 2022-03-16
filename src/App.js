import React , {useState} from "react";
import axios from 'axios';
import ShowTemp from "./ShowData";


function App() {

  const [city, setCity] = useState('');
  const [data, setData] = useState({
       description:"",
       temp:0,
       temp_max: 0,
       temp_min: 0, 
       humidity: 0,
       sunrise: 0,
       sunset: 0,
       country:"",
  })
  const handleClick =()=>{
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d904730a5f9e6d5dd844d571206688e`).then((response)=>{
         setData({
          // description:response.weather[0],
          temp:response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min, 
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country:response.data.sys.country
         })
      })
  }
  return (
    <>
    <div className="container text-center my-2">
        <h1>Weather App using React</h1>
        <input type='text' class="from-control" value={city} onChange={(e)=>{
          setCity(e.target.value);
        }} />
        <button class="btn btn-primary mx-2" type="submit" onClick={handleClick}>Click Me</button>
    </div>
    <ShowTemp text={data}/>
    </>
  );
}

export default App;
