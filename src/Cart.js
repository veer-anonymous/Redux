// import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   addItemToCart,
//   removeItem,
//   removeItemFromCart,
// } from '../redux/CartSlice';

// const Cart = () => {
//   const cartData = useSelector(state => state.cart);

//   const dispatch = useDispatch();

//   return (
//     <View>
//       <FlatList
//         data={cartData.data}
//         renderItem={({item, index}) => {
//           return (
//             <View
//               style={{
//                 width: '100%',
//                 height: 80,
//                 borderRadius: 10,
//                 alignSelf: 'center',
//                 marginTop: 20,
//                 backgroundColor: '#f2f2f2',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 30,
//                 paddingRight: 10,
//                 borderBottomWidth:2
//               }}>
//               <Image
//                 source={{uri: item.image}}
//                 style={{width: 60, height: 60, borderRadius: 10}}
//               />
//               <View style={{width: '50%'}}>
//                 <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 10}}>
//                   {' '}
//                   {item.title.length > 20
//                     ? item.title.substring(0, 20) + '.....'
//                     : item.title}
//                 </Text>
//               </View>

//               <View style={{flexDirection: 'row'}}>
//                 <Text
//                   style={{
//                     color: 'white',
//                     backgroundColor: 'green',
//                     padding: 10,
//                   }}
//                   onPress={() => {
//                     if (item.qty < 2) {
//                       dispatch(removeItem(item.id));
//                     } else {
//                       dispatch(removeItemFromCart(item));
//                     }
//                     // dispatch(removeItem(item));
//                   }}>
//                   {'-'}
//                 </Text>
//                 <Text
//                   style={{
//                     color: 'black',
//                     backgroundColor: 'white',
//                     padding: 10,
//                   }}>
//                   {item.qty}
//                 </Text>

//                 <Text
//                   style={{
//                     color: 'white',
//                     backgroundColor: 'green',
//                     padding: 10,
//                   }}
//                   onPress={() => {
//                     dispatch(addItemToCart(item));
//                   }}>
//                   {'+'}
//                 </Text>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// export default Cart;


// import { View, Text ,FlatList,Image,TouchableOpacity} from 'react-native'
// import React from 'react'
// import { useSelector } from 'react-redux'

// const Cart = () => {
//   const cartData=useSelector(state=>state.cart)
//   return (
//     <View>
//       <FlatList
//         data={cartData.data}
//         renderItem={({item, index}) => {
//           return (
//             <View
//               style={{
//                 width: '95%',
//                 height: 90,
//                 borderRadius: 10,
//                 alignSelf: 'center',
//                 marginTop: 20,
//                 backgroundColor: '#f2f2f2',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 10,
//                 paddingRight: 10,
//                 borderWidth: 0.5,
//                 borderColor: 'grey',
//                 backgroundColor: '#FFF',
//                 // elevation:100
//               }}>
//               <Image
//                 source={{uri: item.image}}
//                 style={{
//                   width: 70,
//                   height: 75,
//                   borderRadius: 10,
//                   //   borderColor: 'red',
//                   borderWidth: 1,
//                 }}
//               />
//               <View style={{width: '50%'}}>
//                 <Text
//                   style={{
//                     fontSize: 13,
//                     fontWeight: '600',
//                     marginLeft: 10,
//                     color: 'black',
//                   }}>
//                   {' '}
//                   {item.title.length > 20
//                     ? item.title.substring(0, 20) + '.....'
//                     : item.title}
//                 </Text>
//               </View>
//               <View>
//                 {/* <TouchableOpacity
//                   style={{
//                     backgroundColor: '#5a992f',

//                     padding: 4,
//                     borderRadius: 3,
//                   }}
//                   onPress={() => {
//                     console.log(addItemToCart(item.id));
//                     // dispatch(addItemToCart(item));
//                   }}>
//                   <Text
//                     style={{color: 'white', fontSize: 14, fontWeight: '800'}}>
//                     {' '}
//                     Add To Cart
//                   </Text>
//                 </TouchableOpacity> */}
//                 {/* <TouchableOpacity
//                   style={{
//                     borderWidth: 1,
//                     borderColor: 'black',
//                     marginTop: 10,
//                     padding: 4,
//                     borderRadius: 4,
//                     borderWidth: 2,
//                     // backgroundColor:like ? "pink" : 'white'
//                   }}
//                   onPress={() => {
//                     setLike(true);
//                     dispatch(addItemToFav(item));

//                     console.log(dispatch(addItemToFav(item.id)));
//                   }}>
//                   <Text
//                     style={{color: 'black', fontSize: 14, fontWeight: '800'}}>
//                     {' '}
//                     Add To Fav
//                   </Text>
//                 </TouchableOpacity> */}
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   )
// }

// export default Cart





import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeItem,
  removeItemFromCart,
} from '../redux/CartSlice';

const Cart = () => {
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList
        data={cartData.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 80,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: '#f2f2f2',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 60, height: 60, borderRadius: 10}}
              />
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 10}}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'green',
                    padding: 10,
                  }}
                  onPress={() => {
                    if (item.qty < 2) {
                      dispatch(removeItem(item.id));
                    } else {
                      dispatch(removeItemFromCart(item));
                    }
                  }}>
                  {'-'}
                </Text>
                <Text
                  style={{
                    color: 'black',

                    padding: 10,
                  }}>
                  {item.qty}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'green',
                    padding: 10,
                  }}
                  onPress={() => {
                    dispatch(addItemToCart(item));
                  }}>
                  {'+'}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Cart;