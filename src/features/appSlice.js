import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    cardId: null,
    cardName: null,
  },
  reducers: {
    setCardInfo: (state,action) => {
     state.cardId = action.payload.cardId;
     state.cardName = action.payload.cardName;
    },
  },
});

export const {setCardInfo} = appSlice.actions;
export const selectcardId= (state) => state.app.cardId;
export const selectcardName= (state) => state.app.cardName;
export default appSlice.reducer;
