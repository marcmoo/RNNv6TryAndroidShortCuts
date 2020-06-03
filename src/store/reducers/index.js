const getAllReducers = (state = {}, action) => {
    return {
        // add reducers here
    }
}

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = null
    }
    return getAllReducers(state, action);
}

export default rootReducer;