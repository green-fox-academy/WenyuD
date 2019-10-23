import React from 'react';
import { connect } from 'react-redux';

const Resetter = (props) => {
    return (
        <div className="resetter">
            <h2>The Resetter</h2>
            <button onClick={props.resetter}>Reset</button>
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
        resetter: () => {
            dispatch({ type: 'RESET' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter)