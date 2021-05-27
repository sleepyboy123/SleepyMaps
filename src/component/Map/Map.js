import React from "react";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

import './Map.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = ({country, continent, points, setPoints, guess, setGuess}) => {

    function handleAnswer(countryName, countryContinent) {

        // Flash Correct Country
        var flashCorrect = document.getElementsByClassName(country);
        flashCorrect[0].style.fill = "green";

        setTimeout(function() {
            // Stop flashing correct country
            flashCorrect[0].style.fill = "#7396D8"

            // Increment Guess Value so that useEffect Hook fires
            setGuess(guess += 1)

            // Add Points based on guess 200 Points for Country, 100 points for Continent
            if (countryName === country) {
                setPoints(points += 200) 
            } else if (countryContinent === continent) {
                setPoints(points += 100) 
            }
        }, 1000);
    }

    return (
        <div style={{maxWidth: '90rem', maxHeight: '720px', margin: 'auto'}}>
            <ComposableMap
                projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 147
                }}
            >
                <Sphere fill="#313A56" stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            return (
                                <Geography
                                    className={geo.properties.NAME}
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={"#7396D8"}
                                    stroke={"#4C4C4C"}
                                    strokeWidth={"1"}
                                    onClick={() => 
                                        handleAnswer(geo.properties.NAME, geo.properties.CONTINENT)
                                    }
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}

export default Map;