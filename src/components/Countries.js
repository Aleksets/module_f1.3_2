import React, { useState } from "react";
import axios from "axios";


function Countries () {
    const [countries, setCountries] = useState ([]);
    if (!countries.length) {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            console.log(res);
            setCountries(res.data);
        })
    }
    return (
        <table>
            <thead><tr>
                <th>Name</th>
                <th>Capital</th>
            </tr></thead>
            <tbody>
                {countries.map(country => <tr key={country.name.official}>
                    <td>{country.name.official}</td>
                    <td>{country.capital}</td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default Countries;