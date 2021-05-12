import React from 'react';

export default function Results({result, address}) {
    return(
        <div>
            <p className="listingsTitle">Recent Listings</p>
            <div className="flexRow containerWidth">
                {result.map((x, index) => (
                    <div className="card" key={index}>
                        <img className="cardImg" src={x.Property.Photo === undefined ? null : x.Property.Photo[0].MedResPath} alt="Building"></img>
                        <div className="cardInfo">
                            <div className="flexRow spaceBetween">
                            <p className="cardTitle">{x.Property.Price === undefined ? x.Property.LeaseRent : x.Property.Price}</p>
                            <p className="smallCapText verticalCentre">{x.Building.Type}</p>
                            </div>
                            <p className="cardInfoAddress">{address[index]}</p>
                            <div className="flexRow spaceBetween">
                            <p className="smallCapText grayText">{x.Building.Bedrooms} Beds</p>
                            <p className="smallCapText grayText">{x.Building.BathroomTotal} Baths</p>
                            <p className="smallCapText grayText">{x.Building.SizeInterior?.length > 1 ? x.Building.SizeInterior : x.Land.SizeTotal}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        ) 
}