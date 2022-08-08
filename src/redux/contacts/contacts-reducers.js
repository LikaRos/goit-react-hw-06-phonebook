import { createReducer } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { deleteUser, filterUser, addUser } from './contact-actions';

const itemReducer = createReducer([], {
  [addUser]: (state, action) => [...state, action.payload],
  [deleteUser]: (state, action) => state.filter(el => el.id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterUser]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
