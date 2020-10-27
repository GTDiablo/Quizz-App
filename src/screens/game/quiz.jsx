import React, {useState} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { add_point, reset_game, next_question } from '../../actions/quiz';
import ChoiceItem from './choiceitem'
import { Link } from 'react-router-dom'


function Quiz() {
    const dispatch = useDispatch();
    const questions_re = useSelector(state => state.questions);
    const quiz_re = useSelector(state => state.quiz);
    let current_question = questions_re.questions[quiz_re.index];
    const [submited, setSubmited] = useState(false);
    const [selected, setSelected] = useState('');

    const handle_button_press = () =>{
        if(!submited){
            setSubmited(true);
            if(selected === current_question.right_answer)
                dispatch(add_point());
        }
        else{
            dispatch(next_question());
            setSubmited(false);
            setSelected('');
        }
    }

    const handle_select = (e) =>{
        if(!submited)
            setSelected(e);
    }

    return (
        <div className="game-container">
        <div className="navigation"
            onClick={()=> dispatch(reset_game())}
        >
            <img src="./assets/reset.svg" alt="" />
            Újrakezdés
        </div>


        { quiz_re.index < questions_re.questions.length ?
        <div className="game-content">
            <div className="game-state">
                {quiz_re.name} játékos pontjai: {quiz_re.points}/{questions_re.questions.length}
            </div>

            <h1>#{quiz_re.index + 1} {current_question.text}</h1>

            <div className="game-actions">
                <div className="game-actions-choices">
                    {
                        current_question.choices.map((c, i)=>(
                            <ChoiceItem
                                text={c}
                                setter_cb={handle_select}
                                selected={c === selected} 
                                key={i}
                                right_answer={current_question.right_answer}
                                show={submited}
                            />
                        ))
                    }
                </div>
                <button
                    className={`btn ${submited? 'btn-primary-outline': 'btn-primary'}`}
                    onClick={() => handle_button_press()}
                    >{submited ? "Tovább": "Küldés"}
                </button>
            </div>
        </div>
        :
        <div className="game-result">
            <div className="game-result-text">{quiz_re.name} játékos {quiz_re.points}/{questions_re.questions.length} pontot ért el!</div>
            <div className="game-result-actions">
                <button onClick={()=> dispatch(reset_game())} className="btn btn-primary">Kezdj neki egy új körnek</button>
                <span>vagy</span>
            <button className="btn btn-primary-outline">
                <Link to="/settings">Hozz létre több kérdést</Link>
            </button>
            </div>
        </div>
        }
        
    </div>
    )
}

export default Quiz;
