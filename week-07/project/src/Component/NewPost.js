import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchPosts from '../actions/fetchPosts';
import { handleNewPost } from '../actions/handleNewPost';

const NewPost = (props) => {
    const [newPost, setNewPost] = useState({
        title:'',
        url:''
    });
    const [errorMsg, setErrorMsg] = useState({
        titleMissing: '',
        urlMissing: ''
    });

    let handleChange = (event) => {
        if (event.target.name === 'title') {
            setNewPost({...newPost, title: event.target.value})
        } else if (event.target.name === 'url') {
            setNewPost({...newPost, url: event.target.value})
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!newPost.title) {
            setErrorMsg({titleMissing: 'Please provide a title!'})
        } else if (!newPost.url) {
            setErrorMsg({urlMissing: 'Please provide a url!'})
        } else {
            setErrorMsg({titleMissing: '', urlMissing: ''});
            await props.submit(newPost);
            props.history.push('/');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input type="text" name="title" id="title" onChange={handleChange}/>
                <span>{errorMsg.titleMissing}</span>
            </label>
            <br/>
            <label>
                Url
                <input type="text" name="url" id="url" onChange={handleChange}/>
                <span>{errorMsg.urlMissing}</span>
            </label>
            <br/>
            <input type="submit"/>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        submit: (post) => dispatch(handleNewPost(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewPost));