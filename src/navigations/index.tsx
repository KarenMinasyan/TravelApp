import { NavigationContainer } from '@react-navigation/native';

import AuthenticatedStack from './StackNavigator/AuthenticatedStack';

const Navigation = () => {
	return (
		<NavigationContainer>
			<AuthenticatedStack />
		</NavigationContainer>
	);
};

export default Navigation;
