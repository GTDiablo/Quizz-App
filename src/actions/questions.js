import { v4 as uuid } from 'uuid';

export const add_question = (question_object) => {
    return {
        type: 'ADD_QUESTION',
        payload: {
            ...question_object,
            id: uuid()
        }
    }
}

export const delete_question = (id)=>{
    return {
        type: 'DELETE_QUESTION',
        payload: id
    }
}

export const load_questions = () =>{
    return {
        type: 'LOAD_QUESTIONS'
    }
}