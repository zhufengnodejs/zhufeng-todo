//todo的reducer
import * as types from '../action-types';
let list = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
let initState = {editing: '', list}
// 增加 删除 切换完成状态
export default function (state = initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      let list = [...state.list, {id: Date.now(), title: action.title, completed: false}];
      localStorage.setItem('todos',JSON.stringify(list));
      return {
        ...state,
        list
      };
    case types.DEL_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id != action.id)
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id == action.id)
            item.completed = !item.completed;
          return item;
        })
      };
    case types.DELETE_ALL_COMPLETED:
      return {
        ...state,
        list: state.list.filter(item => !item.completed)
      };
    case types.TOGGLE_ALL:
      return {
        ...state,
        list: state.list.map(item => {
          item.completed = action.checked;
          return item;
        })
      };
    case types.CHANGE_EDITING:
      return {
        ...state,
        editing: action.id
      };
    case types.UPDATE_TODO:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id == action.id) {
            item.title = action.title;
          }
          return item;
        })
      };
    default:
      return state;
  }
}