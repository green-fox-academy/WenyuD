const initialState = {
    counter: 0,
    tags: []
}

function Reducer(state = initialState, action) {
    if(action.type === 'INCREASE') {
        return {
            ...state,
            counter: state.counter + (action.amount || 1)
        }
    }
    if(action.type === 'DECREASE') {
        return {
            ...state,
            counter: state.counter - (action.amount || 1)
        }
    }
    if(action.type === 'RESET') {
        return {
            ...state,
            counter: 0
        }
    }
    if(action.type === 'SET') {
        return {
            ...state,
            counter: action.amount
        }
    }

    if(action.type === 'ADD_TAG') {
        if(!state.tags.includes(action.tag)){
            state.tags.push(action.tag);
            return {
                ...state,
                tags: state.tags
            }
        }
    }
    if(action.type === 'REMOVE_TAG'){
        if(state.tags.includes(action.tag)){
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.tag)
            }
        }
    }
    if(action.type === 'REMOVE_TAGS'){
        return {
            ...state,
            tags: []
        }
    }
}




export default Reducer;