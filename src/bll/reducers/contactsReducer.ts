import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { id: uuidv4(), name: 'Вадим', number: '89088004465', AdditInform: 'Коллега' },
  {
    id: uuidv4(),
    name: 'Татьяна',
    number: '89807774556',
    AdditInform: 'Встреча в кафе',
  },
  {
    id: uuidv4(),
    name: 'Игорь Васильевич',
    number: '89088004465',
    AdditInform: '',
  },
];

export type ContactType = {
  id: string;
  name: string;
  number: string;
  AdditInform: string;
};
type UpdateType = {
  id: string | undefined;
  value: string;
};

export type ContactsType = ContactType[];

const slice = createSlice({
  name: 'constacts',
  initialState,

  reducers: {
    addContacts(state, action: PayloadAction<ContactType>) {
      state.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) =>
      state.filter(el => el.id !== action.payload),
    upDateName: (state, action: PayloadAction<UpdateType>) =>
      state.map(contact =>
        contact.id === action.payload.id
          ? { ...contact, name: action.payload.value }
          : contact,
      ),
    upDateNumber: (state, action: PayloadAction<UpdateType>) =>
      state.map(contact =>
        contact.id === action.payload.id
          ? { ...contact, number: action.payload.value }
          : contact,
      ),
    upDateMark: (state, action: PayloadAction<UpdateType>) =>
      state.map(contact =>
        contact.id === action.payload.id
          ? { ...contact, AdditInform: action.payload.value }
          : contact,
      ),
  },
});

export const contactsReducer = slice.reducer;
export const { addContacts, deleteContact, upDateName, upDateNumber, upDateMark } =
  slice.actions;
