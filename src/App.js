import Game from './screens/game';
import QuestionManager from './screens/questionmanager';

import { Redirect, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
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
