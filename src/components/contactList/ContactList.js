import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';
import { Grid } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';
import { useGetContactsQuery } from 'services/contactsAPI';

import { ContactListItem } from '../contactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const theme = useTheme();
  // const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const {
    data: contacts,
    error,
    isLoading,
    isFetching,
  } = useGetContactsQuery();

  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter),
  // );

  return (
    <>
      {isFetching && (
        <Grid
          ariaLabel="loading-indicator"
          color={`${theme.colors.primary}`}
          wrapperStyle={theme.loader}
        />
      )}
      {contacts && (
        <List>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
