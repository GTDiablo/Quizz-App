import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import QuestionItem from './questionitem'
import Form from './form'

const QuestionManager = (props) => {
    const questions_re = useSelector(state => state.questions);
    const is_empty = questions_re.questions.length === 0;
    return (
        <div className="manager-container">
            <div className="navigation">
                <Link to="/">
                    &lArr;
                    Vissza a játékhoz
            </Link>
            </div>
            <div className={`manager-questions ${is_empty? 'empty': ''}`}>
                {is_empty?
                <h1>Jelenleg nincsenek kérdések.</h1>
                :
                questions_re.questions.map(q=>(
                    <QuestionItem text={q.text} id={q.id} key={q.id}/>
                ))}

            </div>
            <div className="manager-input">
                <Form />
            </div>
        </div>
    )

}

export default QuestionManager;