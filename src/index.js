import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main'
import { Provider } from 'react-redux'
import store from './store'

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root'));