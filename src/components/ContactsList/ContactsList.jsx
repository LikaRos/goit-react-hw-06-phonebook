import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from 'redux/contacts/contact-actions';

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteUser(id));

  const getVisableContacts = () => {
    console.log(items);
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  console.log(filter);
  return (
    <ul>
      {getVisableContacts().map(({ id, name, phone }) => {
        return (
          <li className={styles.item} key={id}>
            <div className={styles.textWrap}>
              <p className={styles.text}>Name: {name}</p>
              <p className={styles.text}>Phone: {phone}</p>
            </div>

            <div className={styles.btnWrap}>
              <button
                className={styles.button}
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
