import {View, Text} from 'react-native';
import React from 'react';
import {Provider, useSelector} from 'react-redux';
import MyStore from './all/mystore/Mystore';
import Products from './all/Products/Products';
import MainNavigation from './all/navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={MyStore}>
      {/* <Products /> */}
      <MainNavigation/>
    </Provider>
  );
};

export default App;
