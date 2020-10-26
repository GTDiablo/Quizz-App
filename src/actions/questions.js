import { v4 as uuid } from 'uuid';

const add_question = (question_object) => {
    return {
        type: 'ADD_QUESTION',
        payload: {
            ...question_object,
            id: uuid()
        }
    }
}

const delete_question = (id)=>{
    return {
        type: 'DELETE_QUESTION',
        payload: id
    }
}

const load_questions = () =>{
    return {
        type: 'LOAD_QUESTIONS'
    }
}