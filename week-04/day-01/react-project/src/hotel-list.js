import React from 'react';

export default function Hotel(props) {
    let hotel = props.hotels;
    const hotelListStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'border': '1px solid black',
        'margin': '2rem 2rem 2rem 0',
        'padding': '0 2rem 1rem 2rem'
    }
    const imgStyle = {
        'maxWidth': '10rem'
    }
    console.log(hotel);
    

    return (
        <>
            <div>
            <h2>Hotel List</h2>
            {hotel.map((item) => 
                <div style={hotelListStyle}>
                    <h3>{item.name}</h3>
                    <img src={item.imageURL} style={imgStyle}/>
                    <p>{item.description}</p>
                    <button>Book Now!</button>
                </div>
            )}
            </div>
        </>
    );
}