import { configureStore } from '@reduxjs/toolkit';
import phonebookReduser from './phonebook/phonebook-reducer';
import { contactsApi } from '../services/contactsAPI';

export const store = configureStore({
  reducer: {
    contacts: phonebookReduser,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
