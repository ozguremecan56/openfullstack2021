const CountryList = ({countries})=>{
    if(countries.length>10){
        return<div>Too many matches. Specify another filter.</div>
    }else if(countries.length<=10 && countries.length >1){
        return <ul>
            {countries.map(country=><li key={country.name}>{country.name}</li>)}
        </ul>
    }else if(countries.length===0){
        return<div>Type a country name to search.</div>
    }else{
        return<div>
            <h2>{countries[0].name}</h2>
            <div>capital {countries[0].capital}</div>
            <h2>Languages</h2>
            <ul>
                {countries[0].languages.map(lang=><li>{lang.name}</li>)}
            </ul>
            <img src={countries[0].flag} alt="flag" width="200" height="300"/>
        </div>
    }
}

export default CountryList;