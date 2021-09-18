import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, FullImage} from './src/screens';
import Store from './src/store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Home} />
          <Stack.Screen name="Image" component={FullImage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
