import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Game = (props) => {
    useEffect(()=>{

    }, []);

    const quiz = useSelector(state => state.quiz);
    const questions = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    return (
        <div>
            <p>Number of questions: { questions.length }</p>
        </div>
    )

}

export default Game;
