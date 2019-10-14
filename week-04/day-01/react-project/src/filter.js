import React from 'react';
import data from './data';
import StarRating from './star-rating';
import PropertyType from './property-type';

export default function Filter() {
    const filterStyle = {
        'display': 'flex',
        'flexDirection': 'column'
    }

    return (
        <div style={filterStyle}>
            <StarRating filters = {data.filters}/>
            <PropertyType filters = {data.filters} />
        </div>
    );
}