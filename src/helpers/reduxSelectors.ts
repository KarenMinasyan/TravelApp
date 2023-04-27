import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export const filterTourByIdSelector = createSelector(
	({ tours }: RootState) => tours.allTours,
	({ tours }: RootState) => tours.chosenId,
	(items, tourId) => items[tourId]
);
