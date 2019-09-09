import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root'));