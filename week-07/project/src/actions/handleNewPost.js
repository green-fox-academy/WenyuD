const handleNewPost = (posts) => {
    return async (dispatch) => {
        try{
            await fetch(`http://localhost:3001/posts`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(posts)
            })
            let updatedData = await fetch(`http://localhost:3001/posts`);
            let updatedPost = await updatedData.json();
            dispatch({
                type: 'NEW_POST_SUBMIT',
                updatedPost
            });
        }catch(error){
            console.log(error);
        }
    }
}

export { handleNewPost };