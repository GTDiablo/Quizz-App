const add_point = () =>{
    return {
        type: 'QUIZ_ADD_POINT'
    }
}

const set_name = (name) =>{
    return {
        type: 'QUIZ_SET_NAME',
        payload: name
    }
}