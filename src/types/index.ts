import { ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from 'src/helpers/constants';

const { HOME, DETAIL } = SCREENS;

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
	Home: undefined;
	Detail: undefined;
};

export type HomeScreenType = NativeStackScreenProps<RootStackParamList, typeof HOME>;
export type DetailScreenType = NativeStackScreenProps<RootStackParamList, typeof DETAIL>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
	RootStackParamList,
	Screen
>;
