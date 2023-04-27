import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from 'src/store/store';

import Navigation from './src/navigations';

const App = () => (
	<GestureHandlerRootView style={{ flex: 1 }}>
		<Provider store={store}>
			<Navigation />
		</Provider>
	</GestureHandlerRootView>
);

export default App;
