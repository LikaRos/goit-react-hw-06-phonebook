import styles from './ContactFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contact-actions';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handlerFilter = event => {
    dispatch(filterUser(event.target.value));
  };
  return (
    <>
      <form className={styles.form}>
        <h2>Contacts</h2>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={filter}
            onChange={handlerFilter}
          />
        </label>
      </form>
    </>
  );
};
