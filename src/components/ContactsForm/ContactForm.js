import { nanoid } from 'nanoid';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getContactsItem } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsItem);
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.toLowerCase());
        break;

      case 'number':
        setNumber(value.toLowerCase());
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name.includes(newContact.name))) {
      window.alert('The contact added in the list');
    } else {
      dispatch(addContact(newContact));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <Card style={{ width: '25rem' }}>
        <Form className="mb-3 p-2" onSubmit={onHandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={onChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={onChange}
              required
            />
          </Form.Group>
          <Button size="lg" variant="outline-info" type="submit">
            Add contact
          </Button>
        </Form>
      </Card>
    </>
  );
}
