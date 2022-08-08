import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export default function App() {
  return (
    <div className="backimage">
      <ContactForm />
      <ContactFilter />

      <ContactsList />
    </div>
  );
}
