import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useState } from 'react';
import { addUser } from 'redux/contacts/contact-actions';
import { useDispatch, useSelector } from 'react-redux';

export function ContactForm() {
  const items = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const contact = { name, phone, id };
    const oldContact = items.find(item => item.name === contact.name);
    if (oldContact) {
      return alert(`${name} is already in contact`);
    }
    dispatch(addUser(contact));
    setName('');
    setPhone('');
  };
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1>Phonebook</h1>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            className={styles.input}
            type="phone"
            name="phone"
            value={phone}
            required
            onChange={handleChange}
          />
        </label>

        <button className={styles.button} type="submit">
          Add contacts
        </button>
      </form>
    </>
  );
}
