import { v4 as uuid } from 'uuid';

const add_question = (question_object) => {
    return {
        type: 'ADD_QUESTION',
        payload: {
            id: uuid(),
            ...question_object
        }
    }
}

const delete_question = (id)=>{
    return {
        type: 'DELETE_QUESTION',
        payload: id
    }
}