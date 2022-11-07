import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactSlice';
import {
  getContactsItem,
  getContsctasFilter,
} from 'redux/contacts/contactsSelectors';
import ContactItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  const [filterContacts, setFilterContacts] = useState([]);
  const contacts = useSelector(getContactsItem);
  const filter = useSelector(getContsctasFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
    return setFilterContacts(filteredContacts);
  }, [filter, contacts]);

  const onDeleteContacts = id => dispatch(deleteContact(id));
  return (
    <>
      <ListGroup>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDeleteContacts={() => onDeleteContacts(id)}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
