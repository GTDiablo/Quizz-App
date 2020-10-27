import React from 'react';
import { useSelector } from 'react-redux'
import Landing from './landing'
import Quiz from './quiz'


const Game = (props) => {

    const quiz_re = useSelector(state => state.quiz);

    return (
        <React.Fragment>
            { quiz_re.name.trim() !== "" ? <Quiz /> : <Landing />}
        </React.Fragment>
    )
}

export default Game;
