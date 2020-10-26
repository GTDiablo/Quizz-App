const initialState = {
    name: '',
    points: 0
};

const quizReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'QUIZ_ADD_POINT':
            state.points = state.points + 1;
            return state;
        case 'QUIZ_SET_NAME':
            state.name = action.payload;
            return state;
        default:
            return state;
    }
}

export default quizReducer;