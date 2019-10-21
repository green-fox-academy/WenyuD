import React from 'react';
import { connect } from 'react-redux';

const Decreaser = (props) => {
    console.log(props)
    return (
        <div className="decreaser">
            <h2>The Decreaser</h2>
            <p>{props.counter}</p>
            <button onClick={props.decreaser}>Decrease</button>
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
        decreaser: () => {
            dispatch({ type: 'DECREASE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser)