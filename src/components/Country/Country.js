import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, flag, region} = props.country;
    const countryStyle = {
        border: '1px solid gray',
        display: 'flex',
        padding: '20px', 
        margin: '20px',
        borderRadius: '5px'
    }
    const countryImg = {
        width: '300px',
        marginRight: '30px'
    }
    return (
        <div style={countryStyle}>
            <img style={countryImg} src={flag} alt="flag"/>
            <div>
                <h1>{name}</h1>
                <p>Region: {region}</p>
                <Link to={`/countries/${name}`}><button>More Details</button></Link>
                <button onClick={() => props.handleClick(name)}>More Details 2</button>
            </div>
        </div>
    );
};

export default Country;