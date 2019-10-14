import React from 'react';

export default function starRating(props) {
    let filter = props.filters['Star rating'];
    const starRatingStyle = {
        'display': 'flex',
        'flexDirection': 'column',
        'width': '10rem',
        'border': '1px solid black',
        'margin': '2rem',
        'padding': '0 0 1rem 2rem'
    }
    console.log(filter);
    

    return (
        <>
            <div style={starRatingStyle}>
            <h4>Star rating</h4>
                {filter.map((item, index) => 
                    <label>
                        <input 
                            type="checkbox" 
                            name="star" 
                            key = {index} 
                            checked = {item.checked}
                            onChange = {() => {}} />{item.name}
                    </label>
                )}
            </div>
        </>
    );
}