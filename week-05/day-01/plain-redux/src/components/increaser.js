import React from 'react';
import { connect } from 'react-redux';

const Increaser = (props) => {
    
    return (
        <div className="increaser">
            <h2>The Increaser</h2>
            <p>{props.counter}</p>
            <button onClick={props.increaser}>Increase</button>
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
        increaser: () => {
            dispatch({ type: 'INCREASE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser)