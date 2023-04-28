import { ImageSourcePropType } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from 'src/helpers/constants';

const { HOME, DETAIL, MAIN } = SCREENS;

export type TourUniversalType = {
	id: number;
	image: ImageSourcePropType;
};

export type TourType = {
	title: string;
	images: TourUniversalType[];
	price: string;
	rating: number;
	duration: string;
	description: string;
} & TourUniversalType;

export type ToursInitialType = {
	allTours: TourType[];
	chosenId: null | number;
};

export type CategoryType = {
	id: number;
	title: string;
	tours: TourType[];
};

export type AdventuresType = TourUniversalType & { title: string };

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Main: BottomTabScreenProps<TabParamList>;
	Detail: undefined;
};

export type TabParamList = {
	Home: undefined;
	Search: undefined;
	Favorite: undefined;
	Settings: undefined;
};

export type MainScreenType = NativeStackScreenProps<RootStackParamList, typeof MAIN>;
export type DetailScreenType = NativeStackScreenProps<RootStackParamList, typeof DETAIL>;
export type HomeScreenType = BottomTabScreenProps<TabParamList, typeof HOME>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;
