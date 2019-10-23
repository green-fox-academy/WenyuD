import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import Reducer from './Reducer';

// const store = createStore(Reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.dispatch({type: 'SET', amount: 6});
// store.dispatch({type: 'INCREASE'});
// store.dispatch({type: 'INCREASE', amount: 2});
// store.dispatch({type: 'RESET'});
// store.dispatch({type: 'INCREASE'});
// store.dispatch({type: 'DECREASE', amount: 4});
// console.log(store.getState().counter);

// store.dispatch({type: 'ADD_TAG', tag: 'blue'});
// store.dispatch({type: 'ADD_TAG', tag: 'bold'});
// store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
// console.log(store.getState().tags);
// store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
// store.dispatch({type: 'ADD_TAG', tag: 'bold'});
// store.dispatch({type: 'REMOVE_TAGS'});

const store = createStore(Reducer);

const subscribe = store.subscribe(() => {
    console.log(store.getState())
});

subscribe();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
