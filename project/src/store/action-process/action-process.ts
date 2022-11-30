import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../components/const';
import {ActionProcess} from '../../types/state';

const initialState: ActionProcess = {
  city: DEFAULT_CITY,
  sortType: DEFAULT_SORT_TYPE,
  handlerStatus: true,
};

export const actionProcess = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeCity, changeSortType} = actionProcess.actions;
