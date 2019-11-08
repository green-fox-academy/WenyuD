import React from 'react';
import {connect} from 'react-redux';
import Posts from './Posts';
import Side from './Side';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Posts />
            <Side />
        </div>
    )
}

export default Home;