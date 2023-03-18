import { GlobalStyle } from '../../GlobalStyle';
import { Form } from '../../Form/Form';
import { Contacts } from '../Contacts';
import { Filter } from '../../Filter/Filter';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsTitle, Container, FormTitle } from './App.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const App = () => {
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getContacts);
  console.log(allContacts);
  console.log(filter);

  const getFilteredContacts = () => {
    const normilezedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <Contacts visibleContacts={visibleContacts} />
      <GlobalStyle />
      <ToastContainer autoClose={2000} limit={3} position="top-center" />
    </Container>
  );
};