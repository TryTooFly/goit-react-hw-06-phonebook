import { createSelector } from 'reselect';

const getContactsState = state => state.contacts;

export const getContactsItem = createSelector(
  getContactsState,
  contactsState => contactsState.items
);

export const getContsctasFilter = createSelector(
  getContactsState,
  contactsState => contactsState.filter
);
