import './App.css';

import React, {useState, useEffect} from 'react';

import Title from './component/Title/Title';
import Map from './component/Map/Map';
import Country from './component/Country/Country';

const countryJson = require('./component/Country/country.json');

function App() {

  const [points, setPoints] = useState(0);
  const [guess, setGuess] = useState(0);
  const [country, setCountry] = useState();
  const [continent, setContinent] = useState();

  useEffect(() => {
    const number_of_countries = countryJson['ne_110m_admin_0_countries']['geometries'].length
    let random = Math.floor(Math.random() * number_of_countries)
    setCountry(countryJson['ne_110m_admin_0_countries']['geometries'][random]['properties']['NAME']);
    setContinent(countryJson['ne_110m_admin_0_countries']['geometries'][random]['properties']['CONTINENT']);
  }, [guess]);

  return (
    <div className="App">
      <Title points={points} guess={guess} />
      <Map country={country} continent={continent} points={points} setPoints={setPoints} guess={guess} setGuess={setGuess} />
      <Country country={country} />
    </div>
  );
}

export default App;
