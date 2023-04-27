import { store } from 'src/store/store';
import { AdventuresType, CategoryType } from 'src/types';

export const SPACING: number = 10;

export const COLORS = {
	white: '#FFFFFF',
	light: '#F5F8FE',
	primary: '#487DD2',
	dark: '#04031D',
	transparent: 'rgba(0, 0, 0, 0.3)',
};
export const SCREENS = {
	HOME: 'Home',
	DETAIL: 'Detail',
} as const;

const TOURS = store.getState().tours.allTours;

export const CATEGORIES: CategoryType[] = [
	{
		id: 1,
		title: 'Sights',
		tours: [...TOURS, ...TOURS],
	},
	{
		id: 2,
		title: 'Tours',
		tours: [...TOURS, ...TOURS, ...TOURS],
	},
	{
		id: 3,
		title: 'Advantures',
		tours: [...TOURS, ...TOURS, ...TOURS, ...TOURS],
	},
];

export const ADVANTURES: AdventuresType[] = [
	{
		id: 1,
		title: 'Kayaking',
		image: require('../assets/images/advantures/kayaking-con.png'),
	},
	{
		id: 2,
		title: 'Ballooning',
		image: require('../assets/images/advantures/ballooning-icon.png'),
	},
	{
		id: 3,
		title: 'Hiking',
		image: require('../assets/images/advantures/hiking-icon.png'),
	},
	{
		id: 4,
		title: 'Snorkeling',
		image: require('../assets/images/advantures/snorkeling-icon.png'),
	},
];
