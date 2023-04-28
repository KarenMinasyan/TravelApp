import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from 'src/helpers/constants';
import FavoriteScreen from 'src/screens/FavoriteScreen';
import HomeScreen from 'src/screens/HomeScreen';
import SearchScreen from 'src/screens/SearchScreen';
import { TabParamList } from 'src/types';

const BottomTab = createBottomTabNavigator<TabParamList>();

export const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarStyle: {
					borderRadius: SPACING * 2,
					height: SPACING * 7,
					marginBottom: SPACING,
					marginHorizontal: SPACING,
				},
				tabBarActiveTintColor: COLORS.white,
				tabBarActiveBackgroundColor: COLORS.primary,
				tabBarItemStyle: {
					borderRadius: SPACING * 7,
					marginVertical: SPACING - 2,
					marginHorizontal: SPACING + 10,
				},
				tabBarShowLabel: false,
				headerShown: false,
			}}
		>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Icon name='home-outline' color={color} size={size} />,
				}}
			/>
			<BottomTab.Screen
				name='Search'
				component={SearchScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Icon name='search' color={color} size={size} />,
				}}
			/>
			<BottomTab.Screen
				name='Favorite'
				component={FavoriteScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name='bookmark-outline' color={color} size={size} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Settings'
				component={SearchScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Icon name='settings-outline' color={color} size={size} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};
