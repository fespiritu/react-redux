import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux stuffs
import {Provider} from 'react-redux'
import configureStore from './store'
import MyLayout from "./components/layouts";


ReactDOM.render(
    <Provider store={configureStore()}><MyLayout />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
