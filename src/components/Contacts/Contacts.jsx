import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
import { deleteContacts } from '../redux/operations';

const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return(
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} id={contact.id} className={css.contactListItem}>
        <div className={css.contactListItem__name}>
          {contact.name + ' : '}
        </div>
        <div className={css.contactListItem__phone}>
          {contact.phone}
        </div>
        <button
            className={css.contactListItem__button}
            type="button"
            name="delete"
            onClick={() => dispatch(deleteContacts(contact.id))}>
            Delete
          </button>       
      </li>
    ))}
  </ul>)
  };

export default Contacts;