export default function fetchPosts() {
    return dispatch => {
        dispatch({
            type: 'FETCH_POSTS_PENDING'
        })
        fetch('http://localhost:3001/posts', {
            headers: {'Content-Type': 'application/json'}
        })
            .then (res => res.json())
            .then (res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch({
                    type: 'FETCH_POSTS_DONE',
                    posts: res,
                })
            })
            .catch(error => {
                return 'error';
            })
    }
}