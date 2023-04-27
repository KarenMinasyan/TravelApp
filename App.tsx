import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import TourDetailScreen from "./src/screens/TourDetailScreen";
import { TOURS } from "./src/helpers/constants";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => (
   <GestureHandlerRootView style={{ flex: 1 }}>
      <TourDetailScreen tour={TOURS[0]} />
   </GestureHandlerRootView>
   // return <HomeScreen />
)

export default App;
