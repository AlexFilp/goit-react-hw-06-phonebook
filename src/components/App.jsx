import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normilezedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div
      style={{
        paddingLeft: 30,
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts visibleContacts={visibleContacts} />
      <GlobalStyle />
      <ToastContainer autoClose={2000} limit={3} position="top-center" />
    </div>
  );
};
