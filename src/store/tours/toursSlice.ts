import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./initialState";

const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		chosenTourId: (state, { payload }) => {
			state.chosenId = payload;
		}
	},
});

export const { chosenTourId } = toursSlice.actions;
export default toursSlice.reducer;
