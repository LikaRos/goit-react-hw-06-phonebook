import { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';

export function ContactForm({ addContactData }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    console.log(event.target);
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

    addContactData(contact);
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

ContactForm.propTypes = {
  addContactData: PropTypes.func.isRequired,
};
