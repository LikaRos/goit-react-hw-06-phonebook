import { createAction } from '@reduxjs/toolkit';

export const filterUser = createAction('contacts/filter');
export const addUser = createAction('contacts/add');
export const deleteUser = createAction('contacts/delete');
