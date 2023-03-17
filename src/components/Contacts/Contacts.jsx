import { List } from './Contacts.styled';

import { CotnactsItem } from '../../ContactsItem/ContactsItem';

export const Contacts = ({ visibleContacts }) => {
  return (
    <>
      <List>
        {visibleContacts.map(({ id, name, number }) => {
          return <CotnactsItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
