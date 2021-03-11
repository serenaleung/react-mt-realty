import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';

const realtor = require('realtorca');

let opts = {
  LongitudeMin: -79.6758985519409,
  LongitudeMax: -79.6079635620117,
  LatitudeMin: 43.57601549736786,
  LatitudeMax: 43.602250137362276,
  PriceMin: 100000,
  PriceMax: 410000
};

console.log( "realtor.buildUrl(opts)", realtor.buildUrl(opts), {mode: "no-cors"});
//https://www.realtor.ca/Residential/Map.aspx#LongitudeMin=-79.6758985519409&LongitudeMax=-79.6079635620117&LatitudeMin=43.57601549736786&LatitudeMax=43.602250137362276&PriceMin=100000&PriceMax=425000

// Parse options from url
console.log(realtor.optionsFromUrl("https://www.realtor.ca/Residential/Map.aspx#LongitudeMin=-79.6758985519409&LongitudeMax=-79.6079635620117&LatitudeMin=43.57601549736786&LatitudeMax=43.602250137362276&PriceMin=100000&PriceMax=425000"));



  function App(props) {

  const [result, setResult] = useState([]);
    
  const GetResults = () => 
    realtor.post(opts)
      .then(data => {
        setResult(data.Results);
        console.log("result", result);
      })
      .catch(err => {
        console.log("error", err)
      });
    
    return (
      <div>
        <div className="bg">
        <div className="container">
          {/* <p className="heroTitle">Find your perfect home.</p> */}
          <p className="heroTitle2">Find your<br/>perfect home.</p>
          <p className="heroSubtitle">Whether you're looking for an investment or a place of your own.</p>
          {/* <button className="btn" onClick={GetResults} >We Can Help</button>  */}
          <button className="btn" onClick={GetResults} >Search Now</button> 
           {/* <button className="btn">Get Started Now</button> */}
        </div>
        
    </div>
    <div>Recent Listings</div>
      <div>
        {result.map((x) => (
          <img src={x.Property.Photo[0].MedResPath} key={x.Id}></img>
        ))}
        
      </div>
    </div>
         
    )
}

export default App;
