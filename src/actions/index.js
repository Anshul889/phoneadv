import numbers from '../apis/numbers';
import { FETCH_CONTACTS, CREATE_CONTACT, EDIT_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from '../actions/types';
import history from '../history';

export const fetchContacts = () => async dispatch => {
  const response = await numbers.get('/581335f71000004204abaf83');
  response.data.contacts.forEach((contact, index) => {
    return contact.id = index + 1;
  })
  dispatch({ type: FETCH_CONTACTS, payload: response.data.contacts});
}

export const fetchContact = contact => {
  return {
    type: FETCH_CONTACT,
    payload: contact
  };
};

export const editContact = (id, formValues) => dispatch => {
  dispatch({ type: EDIT_CONTACT, payload: id })
    history.push('/');
};

export const createContact = formValues => dispatch => {
  dispatch({ type: CREATE_CONTACT, payload: formValues});
  history.push('/');
};

export const deleteContact = id => dispatch => {
  dispatch({type: DELETE_CONTACT, payload: id});
  history.push('/');
}
