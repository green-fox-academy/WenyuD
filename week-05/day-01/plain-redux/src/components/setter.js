import React, { useState } from 'react';
import { connect } from 'react-redux';

const Setter = (props) => {
    const [value, setValue] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        props.setter(parseInt(value))
        setValue('')
    }
    
    return (
        <div className="setter">
            <h2>The Setter</h2>
            <input type="number" onChange={handleChange} value={value} />
            <br />
            <button onClick={handleClick}>Set</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setter: (number) => {
            dispatch({ type: 'SET', amount: number })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setter)