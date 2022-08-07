import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactData = ({ name, phone, id }) => {
    const contact = { name, phone, id };
    const oldContact = contacts.find(contact => contact.name === name);
    if (oldContact) {
      return alert(`${name} is already in contact`);
    }
    setContacts(prevState => [...prevState, contact]);
  };
  const handlerFilter = event => {
    setFilter(event.target.value);
  };

  const getVisableContacts = () => {
    console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handlerDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <div className="backimage">
      <ContactForm addContactData={addContactData} />
      <ContactFilter filter={filter} handlerFilter={handlerFilter} />

      <ContactsList
        contactsList={getVisableContacts()}
        onDelete={handlerDelete}
      />
    </div>
  );
}
