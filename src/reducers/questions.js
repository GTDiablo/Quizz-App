const questionsReducer = (state = [], action) =>{
    switch(action.type){
        case 'ADD_QUESTION':
            return [action.payload, ...state];
        case 'DELETE_QUESTION':
            return [...state.filter(q=> q.id !== action.payload)]
        default:
            return state;
    }
}

export default questionsReducer;