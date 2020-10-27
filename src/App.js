import Game from './screens/game';
import QuestionManager from './screens/questionmanager';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import {load_questions} from './actions/questions';
import './main.css'


import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(load_questions());
  }, [dispatch]);
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Game} />
        <Route path="/settings" exact component={QuestionManager} />
        <Route path="/*" render={() => (<Redirect to="/" />)} />
      </Switch>
    </Router>
  );
}

export default App;
