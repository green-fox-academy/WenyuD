import React from 'react';
import {connect} from 'react-redux';
import Posts from './Posts';
import Side from './Side';

const Home = () => {
    return (
        <>
            <Posts />
            <Side />
        </>
    )
}

export default Home;