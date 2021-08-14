import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setCountry(data))
    },[])
    return (
        <div>
            <p>this is country detail: {countryName}</p>
            {
               country.map(country => <h3>{country.population}</h3>)
            }
        </div>
    );
};

export default CountryDetail;