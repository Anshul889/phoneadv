import _ from 'lodash';
import { FETCH_CONTACTS, CREATE_CONTACT, FETCH_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../actions/types';

const numberReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, ..._.mapKeys(action.payload, 'name')};
    case FETCH_CONTACT:
      return state;
    case CREATE_CONTACT:
      return {...state, [action.payload.name] : action.payload};
    case EDIT_CONTACT:
      return {...state, [action.payload.name] : action.payload};
    case DELETE_CONTACT:
      return _.omit(state, action.payload);
    default:
      return state;
    }
};

export default numberReducer;
