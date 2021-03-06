import { useEffect, useState } from 'react';
import Country from '../Friend/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

  useEffect (() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
  },[])
    return (
        <div>
            <h1>countries: {countries.length}</h1>
    {
     countries.map(country => <Country country={country}></Country>)
    }
        </div>
    );
};

export default Home;