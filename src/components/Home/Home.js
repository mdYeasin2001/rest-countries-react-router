import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/countries/${name}`);
    }
    return (
        <div>
            {countries.map(country => <Country handleClick={handleClick} key={country.name} country={country}/>)}
        </div>
    );
};

export default Home;