import React, { Component } from 'react';
import { useState } from 'react';
import Search from './components/search';
import Results from './components/results';
import './App.css';

function App() {
    
    const realtor = require('realtorca');
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState([]);
    const [address, setAddressFormat] = useState([]);

    let opts = {
      GeoName: inputs.city,
      LongitudeMin: -123.68060,
      LongitudeMax: -122.58128,
      LatitudeMin: 49.00966,
      LatitudeMax: 49.33848,
      TransactionTypeId: 2,
      PriceMin: inputs.priceMin,
      PriceMax: inputs.priceMax,
      BedRange: inputs.beds,
      BathRange: inputs.baths
    };
  
    console.log( "realtor.buildUrl(opts)", realtor.buildUrl(opts), {mode: "no-cors"});
    //https://www.realtor.ca/Residential/Map.aspx#LongitudeMin=-79.6758985519409&LongitudeMax=-79.6079635620117&LatitudeMin=43.57601549736786&LatitudeMax=43.602250137362276&PriceMin=100000&PriceMax=425000
    
    // Parse options from url
    // console.log(realtor.optionsFromUrl("https://www.realtor.ca/Residential/Map.aspx#LongitudeMin=-79.6758985519409&LongitudeMax=-79.6079635620117&LatitudeMin=43.57601549736786&LatitudeMax=43.602250137362276&PriceMin=100000&PriceMax=425000"));
    

    const GetResults = () => 
      realtor.post(opts)
      .then(data => {
          setResult(data.Results);
          let formatAddr = data.Results.map(
          x => x.Property.Address.AddressText.split(' ').map(  
              word => isNaN(word[1]) ? word.toLowerCase().replace(word[0], word[0].toUpperCase()) : word).join(' ').replace(/\|/, "\n")  
          )
          setAddressFormat(formatAddr);
          console.log("opts", opts, "results", data.Results);
      })
      .catch(err => {
          console.log("error", err)
    });
  
    return (
      <div>
        <div className="bg">
          <div className="container">
            <p className="heroTitle2">Find your<br/>perfect home.</p>
            <p className="heroSubtitle">Whether you're looking for an investment or a place of your own.</p>
            {/* <button className="btn" >We Can Help</button>  */}
            {/* <button className="btn">Get Started Now</button> */}
            <Search inputs={inputs} setInputs={setInputs} GetResults={GetResults} />
          </div>  
        </div>
        <Results result={result} address={address}></Results>
      </div>
         
    )
}

export default App;
