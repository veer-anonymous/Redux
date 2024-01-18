import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { CartEmpty, addItemToCart, removeFromItemCart } from '../../all/slice/CartSlice';

const CartStack = () => {
  const cartData = useSelector(state => state.cart);
  const cartDispatch=useDispatch()
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '95%',
                height: 90,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: '#f2f2f2',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
                backgroundColor: '#FFF',
                // elevation:100
              }}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 70,
                  height: 75,
                  borderRadius: 10,
                  //   borderColor: 'red',
                  borderWidth: 1,
                }}
              />
              <View style={{width: '50%'}}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '600',
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  {' '}
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '.....'
                    : item.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>

              <TouchableOpacity onPress={()=>{
                  if(item.qty < 2){
                    cartDispatch(CartEmpty(item.id))
                  }else{

                  cartDispatch(removeFromItemCart(item))
                  }
                }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: 'green',
                      padding: 10,
                    }}>
                    {'-'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={{
                      color: 'black',
                      backgroundColor: 'white',
                      padding: 10,
                    }}>
                    {item.qty}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                  cartDispatch(addItemToCart(item))
                }}>
                  <Text
                    style={{
                      color: 'white',
                      backgroundColor: 'green',
                      padding: 10,
                    }}>
                    {'+'}
                  </Text>
                </TouchableOpacity>
                
               
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartStack;
