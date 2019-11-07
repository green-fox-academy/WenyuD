import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import fetchPosts from '../actions/fetchPosts';
import upvote from '../image/upvote.png'; 
import downvote from '../image/downvote.png';
import { upvoteHandler, downvoteHandler } from '../actions/handleVoter';


const Posts = (props) => {
    useEffect(() => props.fetchPosts(), []);

    let handleVote = (event) => {
        if (event.target.alt === 'upvote') {
            props.upvote(props.post_id);
        } else if (event.target.alt === 'downvote') {
            props.downvote(props.post_id);
        }
    }

    return (
        <>
            {console.log(props.posts)}
            {props.posts.map((element, index) => {
                return (
                    <div key={index}>
                        <div className="vote">
                            <img key={element.post_id} src={upvote} alt="upvote" onClick={handleVote}/>
                            {element.post_score}
                            <img key={element.post_id} src={downvote} alt="downvote" onClick={handleVote}/>
                        </div>
                        <div>
                            <h3>{element.post_title}</h3>
                            {`Posted on ${element.post_timestamp}`}
                        </div>
                    </div>
                )
            })}
        </>
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
        upvote: (id) => dispatch(upvoteHandler(id)),
        downvote: (id) => dispatch(downvoteHandler(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);