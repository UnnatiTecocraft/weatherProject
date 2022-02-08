import React, { useEffect, useState } from "react";

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Surat");
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=389f2a1a56d621228c41aa26e5815a8f`
            const response = await fetch(url);  
            const resJson = await response.json();  
            setCity(resJson);
        }
        fetchApi();
    }, [search]);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <input type="search" placeholder="Enter name of any city" className="inputfield" 
              onChange={(e) => {
                  setSearch(e.target.value);
              }}
          />
          {!city ? (
              <p>Not data found</p>
          ) : <>
                <div className="info">
                    <h2 className="location"><i className="fas fa-map-marker-alt"/>   {city.name}</h2>
                    <h1 className="temp">{city.main.temp}° C</h1>
                    <h3 className="tempmin_max">Min: {city.main.temp_min}° C  | Max: {city.main.temp_max}° C </h3>
                </div>
            </>
          }
          
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
