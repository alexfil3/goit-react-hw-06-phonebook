import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    return contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <ul className={css.list}>
      {visibleContacts().map(({ name, number, id }) => {
        return <ContactListItem name={name} number={number} key={id} id={id} />;
      })}
    </ul>
  );
};
