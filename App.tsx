import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import Navigation from "./src/navigations";

const App = () => (
   <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      {/*<TourDetailScreen tour={TOURS[0]} />*/}
   </GestureHandlerRootView>
)

export default App;
