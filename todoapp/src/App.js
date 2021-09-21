import React from 'react';
import {StatusBar} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Add from './screens/Add';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#0f4c75" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Add"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Todo App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
