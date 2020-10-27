import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { set_name } from '../../actions/quiz';
import { Link } from 'react-router-dom'


function Landing(props) {

    const questions_re = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    let disabled = questions_re.questions.length <= 0;

    const dispatch_name = () => {
        if (name.trim() !== "")
            dispatch(set_name(name));
    }

    return (
        <div className="landing-container">
            <div className="landing-hero">
                <div className="navigation">
                    <Link to="/settings">
                        <img src="./assets/settings.svg" alt="" />
                        Beállítások
                    </Link>
                </div>
                <div className="landing-content">
                    <h1>A Nagy Quiz App</h1>
                    <p>Teszteld saját és barátaid tudástárát egy izgalmas megmérettetéssel ! Készíts és válaszolj meg nehéz
                    vagy könnyű kérdéseket. A mókának sosincs vége, bármikor új kérdéseket adhatsz meg.</p>
                    <p>Add meg a neved és kezdjünk hozzá !</p>
                    <div className="landing-content-action">
                        <input
                            disabled={disabled}
                            type="text"
                            placeholder="Neved:"
                            onChange={e => setName(e.target.value)} />
                        <button
                            disabled={disabled}
                            onClick={() => dispatch_name()}
                            className="btn btn-primary">Kezdjünk Hozzá <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                    {disabled ?
                        <div className="landing-content-error caption-t">
                            <b>Figyelem:</b> Addig nem kezdhetsz játszani, amíg nincsenek kérdések!
                            Adj meg új kérdéseket a beállítások menüben vagy kattints ide!
                        </div>
                        :
                        null
                    }
                </div>

            </div>
            <div className="landing-illustration">

            </div>
        </div>
    )
}

export default Landing;
