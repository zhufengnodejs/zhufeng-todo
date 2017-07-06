import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import store from './store';
import {Provider} from 'react-redux';
//Provider负责向子组件提供上下文对象,上下文对象有一个store
render(<Provider store={store}>
  <App/>
</Provider>,document.querySelector('#root'));