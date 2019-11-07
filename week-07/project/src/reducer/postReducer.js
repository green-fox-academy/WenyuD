const initState = {
    posts: [],
    pending: null
}

export default function postReducer (state = initState, action) {
    if (action.type === 'FETCH_POSTS_PENDING') {
        return {
            ...state,
            pending: true
        }
    } 
    else if (action.type === 'FETCH_POSTS_DONE') {
        return {
            ...state,
            posts: action.posts,
            pending: false
        }
    }
    else if (action.type === 'UPVOTE' || action.type === 'DOWNVOTE') {
        return {
            ...state,
            posts: action.posts
        }
    }
    return state;
}