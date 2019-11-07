import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/fetchPosts';

const NewPost = () => {
    let handleSubmit = (event) => {
        console.log('submit');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" name="title" id="title"/>
            </label>
            <br/>
            <label>
                Url
                <input type="text" name="url" id="url"/>
            </label>
            <br/>
            <input type="submit"/>
        </form>
    )
}

export default NewPost;