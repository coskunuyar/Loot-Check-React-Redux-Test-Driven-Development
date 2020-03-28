import React from 'react';
import App from './component/App';
import rootReduceer from './reducers/balance';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';

const store = createStore(rootReduceer);

render(<Provider store={store}>
            <App/>
       </Provider>,document.getElementById('root'));
