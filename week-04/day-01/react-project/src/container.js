import React from 'react';
import data from './data';
import Filter from './filter';
import Hotel from './hotel-list';

export default function Container() {
    const containerStyle = {
        'display': 'flex'
    }
    const headerStyle = {
        'display': 'flex',
        'width': '100%',
        'marginLeft': '2rem'
    }

    return (
        <>
            <h1 style={headerStyle}>Hotel Booking</h1>
            <div style={containerStyle}>
                <Filter filters = {data.filters}/>
                <Hotel hotels = {data.hotels}/>
            </div>
        </>
    );
}