import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import Home from './quizz/Home';
import store from './redux/store';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Main from './Navigation/Main';

const App=()=>{

  return(
    <NavigationContainer>
<Provider store={store}>
<Main/>
</Provider>
</NavigationContainer>
  )
}

export default App