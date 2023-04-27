import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import Navigation from "./src/navigations";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const App = () => (
   <GestureHandlerRootView style={{ flex: 1 }}>
     <Provider store={store}>
       <Navigation />
     </Provider>
   </GestureHandlerRootView>
)

export default App;
