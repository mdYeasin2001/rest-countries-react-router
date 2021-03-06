import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name} = useParams();
    const [country, setCountry] = useState({});
    console.log(country);
    const { area, capital, flag, population, region, subregion, alpha2Code } = country;
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(...data))
    }, [name])
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Details Of: {name}</h1>
            <img style={{maxWidth: "450px"}} src={flag} alt="flag"/>
            <h4>alpha2Code: {alpha2Code}</h4>
            <h4>Area: {area}</h4>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <h4>Subregion: {subregion}</h4>
        </div>
    );
};

export default CountryDetails;