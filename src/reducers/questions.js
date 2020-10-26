const initial_state = {
    loading: true,
    questions: []
}

const load_questions_from_localstorage = () => {
    let result = localStorage.getItem('questions');
    if(result !==null)
        return JSON.parse(result);
    else
        return [];
}

const save_questions_to_localstorage = (questions_array) => {
    let string = JSON.stringify(questions_array);
    localStorage.setItem('questions', string);
}

const questionsReducer = (state = initial_state, action) => {
    let new_questions;
    switch (action.type) {
        case 'ADD_QUESTION':
            new_questions = [action.payload, ...state.questions];
            save_questions_to_localstorage(new_questions);
            return {
                ...state,
                questions: new_questions
            }
        case 'DELETE_QUESTION':
            new_questions = [...state.questions.filter(q => q.id !== action.payload)];
            save_questions_to_localstorage(new_questions);
            return {
                ...state,
                questions: new_questions
            }

        case 'LOAD_QUESTIONS':
            return {
                loading: false,
                questions: load_questions_from_localstorage()
            }
        default:
            return state;
    }
}

export default questionsReducer;