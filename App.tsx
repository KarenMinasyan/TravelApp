import React from 'react';
import TourDetailScreen from "./src/screens/TourDetailScreen";
import { TOURS } from "./src/helpers/constants";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
   return <TourDetailScreen tour={TOURS[0]}/>
  // return <HomeScreen />
}

export default App;
