import { createSlice } from '@reduxjs/toolkit';
import { TourType } from 'src/types';

import { initialState } from './initialState';

const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		chosenTourId: (state, { payload }) => {
			state.chosenId = payload;
		},
		changeImage: (state, { payload }) => {
			state.allTours = state.allTours.map((item: TourType, index: number) => {
				if (index === state.chosenId) {
					item.image = item.images[payload].image;
				}
				return item;
			});
		},
	},
});

export const { chosenTourId, changeImage } = toursSlice.actions;
export default toursSlice.reducer;
