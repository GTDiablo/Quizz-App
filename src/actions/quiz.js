export const add_point = () =>{
    return {
        type: 'QUIZ_ADD_POINT'
    }
}

export const set_name = (name) =>{
    return {
        type: 'QUIZ_SET_NAME',
        payload: name
    }
}

export const reset_game = () =>{
    return {
        type: 'QUIZ_RESET_NAME'
    }
}

export const next_question = () =>{
    return {
        type: 'QUIZ_NEXT_QUESTION'
    }
}