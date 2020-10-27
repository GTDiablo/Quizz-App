import React from 'react'

function ChoiceItem({text, selected, setter_cb, right_answer, show}) {
    let action_class = '';

    if(show && right_answer === text){
        action_class = 'quiz-choice__right';
    }

    if(selected && show && right_answer !== text){
        action_class = 'quiz-choice__wrong';
    }

    return (
        <div
            onClick={()=> setter_cb(text)}
            className={`quiz-choice ${selected ? 'quiz-choice__selected' : ''} ${action_class}`}>
            <div className="quiz-choice-dot"></div>
        <div className="quiz-choice-text">{text}</div>
        </div>
    )
}

export default ChoiceItem
