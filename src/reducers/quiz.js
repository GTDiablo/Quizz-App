const initialState = {
    name: '',
    points: 0,
    index: 0
};

const quizReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'QUIZ_ADD_POINT':
            return {
                ...state,
                points: state.points + 1
            }

        case 'QUIZ_SET_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'QUIZ_RESET_NAME':
            return {
                name: '',
                points: 0,
                index:0
            }

        case 'QUIZ_NEXT_QUESTION':
            return {
                ...state,
                index: state.index + 1
            }

        default:
            return state;
    }
}

export default quizReducer;