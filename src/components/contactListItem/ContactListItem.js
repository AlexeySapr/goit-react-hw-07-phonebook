import { useDeleteContactMutation } from 'services/contactsAPI';

import { ListItem, Text, ItemBtn } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  const [
    onDelete, // This is the mutation trigger
    { isLoading: isDeleting }, // This is the destructured mutation result
  ] = useDeleteContactMutation();
  return (
    <ListItem>
      <Text>
        {name}: {phone}
      </Text>
      <ItemBtn type="button" onClick={() => onDelete(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </ItemBtn>
    </ListItem>
  );
};
