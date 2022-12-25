const initialState = {
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default reducer