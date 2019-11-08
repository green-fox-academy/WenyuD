const upvoteHandler = (posts) => {
    return async (dispatch) => {
        try{
          await fetch(`http://localhost:3001/posts/${posts.post_id}/upvote`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
          })
          let updatedData = await fetch(`http://localhost:3001/posts`);
          let updatedPost = await updatedData.json();
          dispatch({
            type: 'UPVOTED',
            updatedPost
          });
        }catch(error){
          console.log(error);
        }
    }
}


const downvoteHandler = (posts) => {
    return async (dispatch) => {
        try{
          await fetch(`http://localhost:3001/posts/${posts.post_id}/downvote`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
          })
          let updatedData = await fetch(`http://localhost:3001/posts`);
          let updatedPost = await updatedData.json();
          dispatch({
            type: 'DOWNVOTE',
            updatedPost
          });
        }catch(error){
          console.log(error);
        }
    }
}

export {
    upvoteHandler,
    downvoteHandler
}