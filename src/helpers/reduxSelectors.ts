import { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";

export const filterTourByIdSelector = createSelector(
  ({ tours }: RootState) => tours.allTours,
  ({ tours }: RootState) => tours.chosenId,
  (items, tourId) => items[tourId]
);
