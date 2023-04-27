import { configureStore } from '@reduxjs/toolkit';
import toursSlice from "./tours/toursSlice";

export const store = configureStore({
	reducer: {
		tours: toursSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
