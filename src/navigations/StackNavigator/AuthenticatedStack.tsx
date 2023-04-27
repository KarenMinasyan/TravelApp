import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from 'src/helpers/constants';
import HomeScreen from 'src/screens/HomeScreen';
import TourDetailScreen from 'src/screens/TourDetailScreen';
import { RootStackParamList } from 'src/types';

const { HOME, DETAIL } = SCREENS;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={HOME} component={HomeScreen} />
			<Stack.Screen name={DETAIL} component={TourDetailScreen} />
		</Stack.Navigator>
	);
};

export default AuthenticatedStack;
