import {createStore,combineReducers} from 'redux';
import {todos,filter} from './reducers';
let reducer = combineReducers({
  todos,
  filter
});
let store = createStore(reducer);
/*{
  todos:[{id:1,title:'学习React'}],
  filter:'all'
}*/
export default store;