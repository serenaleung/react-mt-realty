import React from 'react';

export default function Search(props, {inputs, setInputs}) {

    const handleInputs = e => {
        props.setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
        console.log(JSON.stringify(inputs));
    }
        
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="City, Neighbourhood or MLS® number" name="city" value={props.inputs.city} onChange={handleInputs}></input>
          <select name="priceMin" value={props.inputs.priceMin} onChange={handleInputs}>
            <option value="" disabled selected hidden>Min Price</option>
            <option value={0}>0</option>
            <option value={25000}>25,000</option>
            <option value={50000}>50,000</option>
            <option value={75000}>75,000</option>
            <option value={100000}>100,000</option>
            <option value={125000}>125,000</option>
            <option value={150000}>150,000</option>
            <option value={175000}>175,000</option>
            <option value={200000}>200,000</option>
            <option value={225000}>225,000</option>
            <option value={250000}>250,000</option>
            <option value={275000}>275,000</option>
            <option value={300000}>300,000</option>
            <option value={325000}>325,000</option>
            <option value={350000}>350,000</option>
            <option value={375000}>375,000</option>
            <option value={400000}>400,000</option>
            <option value={425000}>425,000</option>
            <option value={450000}>450,000</option>
            <option value={475000}>475,000</option>
            <option value={500000}>500,000</option>
            <option value={550000}>550,000</option>
            <option value={600000}>600,000</option>
            <option value={650000}>650,000</option>
            <option value={700000}>700,000</option>
            <option value={750000}>750,000</option>
            <option value={800000}>800,000</option>
            <option value={850000}>850,000</option>
            <option value={900000}>900,000</option>
            <option value={950000}>950,000</option>
            <option value={1000000}>1,000,000</option>
            <option value={1100000}>1,100,000</option>
            <option value={1200000}>1,200,000</option>
            <option value={1300000}>1,300,000</option>
            <option value={1400000}>1,400,000</option>
            <option value={1500000}>1,500,000</option>
            <option value={1600000}>1,600,000</option>
            <option value={1700000}>1,700,000</option>
            <option value={1800000}>1,800,000</option>
            <option value={1900000}>1,900,000</option>
            <option value={2000000}>2,000,000</option>
            <option value={2500000}>2,500,000</option>
            <option value={3000000}>3,000,000</option>
            <option value={3500000}>3,500,000</option>
            <option value={4000000}>4,000,000</option>
            <option value={4500000}>4,500,000</option>
            <option value={5000000}>5,000,000</option>
            <option value={5500000}>5,500,000</option>
            <option value={6000000}>6,000,000</option>
            <option value={6500000}>6,500,000</option>
            <option value={7000000}>7,000,000</option>
            <option value={7500000}>7,500,000</option>
            <option value={10000000}>10,000,000</option>
            <option value={10500000}>10,500,000</option>
            <option value={20000000}>20,000,000</option>
          </select>
          <select name="priceMax" value={props.inputs.priceMax} onChange={handleInputs}>
            <option value="" disabled selected hidden>Max Price</option>
            <option value="20000000">Unlimited</option>
            <option value={25000}>25,000</option>
            <option value={50000}>50,000</option>
            <option value={75000}>75,000</option>
            <option value={100000}>100,000</option>
            <option value={125000}>125,000</option>
            <option value={150000}>150,000</option>
            <option value={175000}>175,000</option>
            <option value={200000}>200,000</option>
            <option value={225000}>225,000</option>
            <option value={250000}>250,000</option>
            <option value={275000}>275,000</option>
            <option value={300000}>300,000</option>
            <option value={325000}>325,000</option>
            <option value={350000}>350,000</option>
            <option value={375000}>375,000</option>
            <option value={400000}>400,000</option>
            <option value={425000}>425,000</option>
            <option value={450000}>450,000</option>
            <option value={475000}>475,000</option>
            <option value={500000}>500,000</option>
            <option value={550000}>550,000</option>
            <option value={600000}>600,000</option>
            <option value={650000}>650,000</option>
            <option value={700000}>700,000</option>
            <option value={750000}>750,000</option>
            <option value={800000}>800,000</option>
            <option value={850000}>850,000</option>
            <option value={900000}>900,000</option>
            <option value={950000}>950,000</option>
            <option value={1000000}>1,000,000</option>
            <option value={1100000}>1,100,000</option>
            <option value={1200000}>1,200,000</option>
            <option value={1300000}>1,300,000</option>
            <option value={1400000}>1,400,000</option>
            <option value={1500000}>1,500,000</option>
            <option value={1600000}>1,600,000</option>
            <option value={1700000}>1,700,000</option>
            <option value={1800000}>1,800,000</option>
            <option value={1900000}>1,900,000</option>
            <option value={2000000}>2,000,000</option>
            <option value={2500000}>2,500,000</option>
            <option value={3000000}>3,000,000</option>
            <option value={3500000}>3,500,000</option>
            <option value={4000000}>4,000,000</option>
            <option value={4500000}>4,500,000</option>
            <option value={5000000}>5,000,000</option>
            <option value={5500000}>5,500,000</option>
            <option value={6000000}>6,000,000</option>
            <option value={6500000}>6,500,000</option>
            <option value={7000000}>7,000,000</option>
            <option value={7500000}>7,500,000</option>
            <option value={10000000}>10,000,000</option>
            <option value={10500000}>10,500,000</option>
            <option value={20000000}>20,000,000</option>
          </select>
          <select name="beds" value={props.inputs.beds} onChange={handleInputs}>
            <option value="" disabled selected hidden>Beds</option>
            <option value="">Any</option>
            <option value={'1-1'}>1</option>
            <option value={'1-0'}>1+</option>
            <option value={'2-2'}>2</option>
            <option value={'2-0'}>2+</option>
            <option value={'3-3'}>3</option>
            <option value={'3-0'}>3+</option>
            <option value={'4-4'}>4</option>
            <option value={'4-0'}>4+</option>
            <option value={'5-5'}>5</option>
            <option value={'5-0'}>5+</option>
          </select>
          <select name="baths" value={props.inputs.baths} onChange={handleInputs}>
            <option value="" disabled selected hidden>Baths</option>
            <option value="">Any</option>
            <option value={'1-1'}>1</option>
            <option value={'1-0'}>1+</option>
            <option value={'2-2'}>2</option>
            <option value={'2-0'}>2+</option>
            <option value={'3-3'}>3</option>
            <option value={'3-0'}>3+</option>
            <option value={'4-4'}>4</option>
            <option value={'4-0'}>4+</option>
            <option value={'5-5'}>5</option>
            <option value={'5-0'}>5+</option>
          </select>
          <button className="btn" type="submit" onClick={props.GetResults}>Search Now</button> 
        </form>   
      </div>
    );
}