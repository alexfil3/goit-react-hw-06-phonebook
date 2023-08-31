import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export function App() {
  const { container, title } = css;

  return (
    <div className={container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm />
      <h2 className={title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
