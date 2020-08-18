import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'react-thunk';

export const store = createStore(
    {},
    compose(applyMiddleware(thunk))
)