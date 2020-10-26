import quizReducer from './reducers/quiz'
import questionsReducer from './reducers/questions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const allReducers = combineReducers({
    questions: questionsReducer,
    quiz: quizReducer
});

const store = createStore(allReducers);

const ReduxProvider = (props) => <Provider store={store}>{props.children}</Provider>

export default ReduxProvider;