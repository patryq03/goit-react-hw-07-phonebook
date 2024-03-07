import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import { removeContact } from '../redux/contactSlice';

const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return(
  <ul className={style.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} id={contact.id} className={style.contactListItem}>
        <div className={style.contactListItem__name}>
          {contact.name + ' : '}
        </div>
        <div className={style.contactListItem__phone}>
          {contact.phone}
        </div>
        <button
            className={style.contactListItem__button}
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
