import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from 'src/helpers/constants';
import { BottomTabNavigator } from 'src/navigations/BottomNavigator';
import TourDetailScreen from 'src/screens/TourDetailScreen';
import { RootStackParamList } from 'src/types';

const { DETAIL, MAIN } = SCREENS;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={MAIN} component={BottomTabNavigator} />
			<Stack.Screen name={DETAIL} component={TourDetailScreen} />
		</Stack.Navigator>
	);
};

export default AuthenticatedStack;
