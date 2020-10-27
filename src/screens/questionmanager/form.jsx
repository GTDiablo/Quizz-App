import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_question } from '../../actions/questions';

function Form() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(-1);
    const [question, setQuestions] = useState('')
    const [answers, setAnswers ] = useState(['', '', '', ''])

    const add_new_question = () =>{
        let can_dispatch = true;

        if(question.trim() === "")
            can_dispatch = false
        
        if(selected === -1)
            can_dispatch = false

        answers.forEach(a=>{
            if(a.trim() === "")
            can_dispatch = false
        });
        
        if(can_dispatch){
            const question_object = {
                text: question,
                choices: answers,
                right_answer: answers[selected]
            }
            dispatch(add_question(question_object));
            // Reset form
            setAnswers(['', '', '', '']);
            setSelected(-1);
            setQuestions('');
        }
    }

    const update_index = (i, value) =>{
        const arr = answers;
        arr[i] = value;
        setAnswers(arr);
    }

    return (
        <div className="manager-input-content">
            <div className="input-group">
                <label htmlFor="question-input">Kérdés</label>
                <input
                    id="question-input"
                    name="question-input"
                    type="text"
                    value={question}
                    onChange={e=> setQuestions(e.target.value)} />
            </div>
            <div className="manager-input-content-labels">
                <span className="caption-t"><b>Válasz:</b></span>
                <span className="caption-t"><b>Helyes ?</b></span>
            </div>
            <div className="choices">
                {
                    answers.map((a,i)=>(
                    <div className="choice-input" key={i}>
                        <input type="text" 
                            onChange={e=> update_index(i, e.target.value)}/>
                        <input
                            type="checkbox"
                            checked={selected === i} 
                            value={a}
                            onChange={()=> setSelected(i)}/>
                    </div>
                    ))
                }

            </div>

            <button
                className="btn btn-primary"
                onClick={()=> add_new_question()}>
                    Kérdés hozzáadása
                </button>

        </div>
    )
}

export default Form
