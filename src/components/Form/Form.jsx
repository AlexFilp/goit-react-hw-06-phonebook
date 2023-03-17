import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, Label, Input, Span, Btn } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleChange = evt => {
    console.log(evt.target.name);

    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
      name,
      number,
      id: nanoid(10),
    });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onHandleChange}
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
          value={number}
          onChange={onHandleChange}
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
