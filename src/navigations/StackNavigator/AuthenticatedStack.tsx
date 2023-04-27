import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/HomeScreen';
import TourDetailScreen from 'src/screens/TourDetailScreen';

const Stack = createNativeStackNavigator<any>();

const AuthenticatedStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={'Home'} component={HomeScreen} />
			<Stack.Screen name={'Detail'} component={TourDetailScreen} />
		</Stack.Navigator>
	);
};

export default AuthenticatedStack;
