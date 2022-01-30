import { useSelector } from 'react-redux';
import { selectors } from 'redux/phonebook';
import { useGetContactsQuery } from 'services/contactsAPI';

import { ContactListItem } from '../contactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(selectors.getFilter);
  const { data: contacts, error } = useGetContactsQuery();

  const normalizedFilter = filter.toLowerCase();

  let filteredContacts = [];
  if (contacts) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
    <>
      {/* {isFetching && (
        <Grid
          ariaLabel="loading-indicator"
          color={`${theme.colors.primary}`}
          wrapperStyle={theme.loader}
        />
      )} */}
      {contacts && (
        <List>
          {filteredContacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
