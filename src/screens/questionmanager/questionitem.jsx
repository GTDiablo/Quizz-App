import React from 'react'
import { useDispatch } from 'react-redux'
import { delete_question } from '../../actions/questions';


function QuestionItem({id, text}) {
    const dispatch = useDispatch();
    return (
        <div className="question-item">
            <div className="question-item-text">{text}</div>
            <button 
                onClick={()=> dispatch(delete_question(id))}
                className="question-item-action">
                &times;
            </button>
        </div>
    )
}

export default QuestionItem
