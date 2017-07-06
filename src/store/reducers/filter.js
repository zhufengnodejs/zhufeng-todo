import {CHANGE_FILTER} from '../action-types'
export default function(state='all',action={}){
  switch (action.type){
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}