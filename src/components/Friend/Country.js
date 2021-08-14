import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, flag,} = props.country;
    const countryStyle ={
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        
    }
    return (
        <div style={countryStyle}>
            <h2>name:{name}</h2>
            <p>capital:{capital}</p>
            <img style={{ width:'20%' }} src={flag} alt="countryFlag"/>
            <p>Details: <Link to={`/country/${name}`}>Show detail of {name}</Link></p>
        </div>
    );
};

export default Country;