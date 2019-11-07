const upvoteHandler = (posts) => {
    console.log(posts);
    return {
        type: "UPVOTE",
        posts: posts
    }
}
    

const downvoteHandler = (posts) => ({
    type: "DOWNVOTE",
    posts: posts
});

export {
    upvoteHandler,
    downvoteHandler
}