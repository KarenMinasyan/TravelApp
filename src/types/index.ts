import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from 'src/helpers/constants';

const { HOME, DETAIL } = SCREENS;

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
