import { ContactForm, Label, Input, Span, Btn } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    if (allContacts.find(contact => contact.name === nameValue)) {
      return toast.error(`${nameValue} is already in contacts!`);
    }
    dispatch(addContact(nameValue, numberValue));
    form.reset();
  };

  return (
    <ContactForm onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </ContactForm>
  );
};

// export class OldForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = evt => {
//     this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
//   };

// handleSubmit = evt => {
//   evt.preventDefault();
//   this.props.onSubmit({
//     ...this.state,
//     id: nanoid(10),
//   });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <ContactForm onSubmit={this.handleSubmit} autoComplete="off">
//         <Label>
//           <Span>Name</Span>
//           <Input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </Label>
//         <Label>
//           <Span>Number</Span>
//           <Input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </Label>
//         <Btn type="submit">Add contact</Btn>
//       </ContactForm>
//     );
//   }
// }
