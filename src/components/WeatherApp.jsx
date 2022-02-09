import React, { useEffect, useState } from "react";

const WeatherApp = () => {

    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [search, setSearch] = useState("surat");
    
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=389f2a1a56d621228c41aa26e5815a8f`
            const response = await fetch(url);  
            const resJson = await response.json();  
            setCity(resJson.main);
            setCountry(resJson.sys.country);
        }
        fetchApi();
    }, [search]);
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <input type="search" placeholder="Enter city" className="inputfield" value={search}
              onChange={(e) => {
                  setSearch(e.target.value);
              }}
          />
          {!city ? (
              <p>No data found</p>
          ) : <>
                <div className="info">
                    <h2 className="location"><i className="fas fa-map-marker-alt"/>     {search}, {country}</h2>
                    <h1 className="temp">{city.temp}° C</h1>
                    <h3 className="tempmin_max">Min : {city.temp_min}° C  | Max : {city.temp_max}° C </h3>
                </div>
                <div className="wave -one"/>
                <div className="wave -two"/>
                <div className="wave -three"/>
            </>
          }
          
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
