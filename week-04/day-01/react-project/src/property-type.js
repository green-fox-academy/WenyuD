import React from 'react';

export default function PropertyType(props) {
    let filter = props.filters['Property type'];
    const propertyTypeStyle = {
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
            <div style={propertyTypeStyle}>
            <h4>Property type</h4>
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