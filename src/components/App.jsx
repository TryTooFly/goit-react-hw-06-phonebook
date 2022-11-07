import {Container } from 'react-bootstrap';
import ContactForm from './ContactsForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
    <Container className="p-3">
    <h1 className="header">Phonebook</h1>
      <ContactForm />
      </Container>
      <Container className="p-3">
      <h2 className="header">Contacts</h2>
      <Filter />
      <ContactList />
      </Container>
    </>
  );
};
