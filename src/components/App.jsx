import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from './Hooks/useLocalStorage';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    console.log(data);

    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    const normilezedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div
      style={{
        paddingLeft: 30,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={visibleContacts} onDelete={deleteContact} />
      <GlobalStyle />
    </div>
  );
};

// export class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevPorps, prevState) {
//     if (this.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

// formSubmitHandler = data => {
//   console.log(data);

// if (this.state.contacts.find(contact => contact.name === data.name)) {
//   alert(`${data.name} is already in contacts`);
// } else {
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, data],
//   }));
// }
//   };

//   changeFilter = evt => {
//     this.setState({
//       filter: evt.currentTarget.value,
//     });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normilezedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilezedFilter)
//     );
//   };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

//   render() {
//     const visibleContacts = this.getFilteredContacts();
//     return (
//       <div
//         style={{
//           paddingLeft: 30,
//           fontSize: 20,
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <Contacts contacts={visibleContacts} onDelete={this.deleteContact} />
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
