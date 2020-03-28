import React from 'react';
import App from './component/App';
import rootReduceer from './reducers/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore , applyMiddleware } from 'redux';
import './index.css';

const store = createStore(rootReduceer , applyMiddleware(thunk));

render(<Provider store={store}>
            <App/>
       </Provider>,document.getElementById('root'));
