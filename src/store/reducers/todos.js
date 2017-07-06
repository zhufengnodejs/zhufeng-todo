//todo的reducer
import {ADD_TODO} from '../action-types';
// 增加 删除 切换完成状态
export default function(state=[],action){
   switch(action.type){
     case ADD_TODO:
       return [...state,{id:Date.now(),title:action.title, completed:false}];
     default:
       return state;
   }
}