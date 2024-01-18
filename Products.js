import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './redux/CartSlice';
import {useNavigation} from '@react-navigation/native';
import {addItemToFav} from './src/FavSlice';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {FlatList} from 'react-native-gesture-handler';

const Products = () => {
  const reduxData = useSelector(state => state);
  const reduxFav = useSelector(state => state);

  const [like, setLike] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  //   console.log(reduxData.cart.data.length);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      //   .then(json => console.log(json));
      .then(json => {
        json.map(item => {
          item.qty = 1;
        });

        setAllProducts(json);
      });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#0f1956',
          borderBottomWidth: 3,
          borderBottomColor: 'rgb(37, 150, 190)',
        }}>
        <Text style={{fontSize: 17, fontWeight: '900', color: '#ffff'}}>
          {' '}
          My Redux App
        </Text>

        <Text
          style={{
            backgroundColor: '#f2f2f2',
            color: 'black',
            fontWeight: '600',
            padding: 10,
            // textDecorationLine: 'underline',
            borderRadius: 10,
            // backgroundColor:"pink"
            backgroundColor: '#0f1956',
            color: '#fff',
          }}
          onPress={() => {
            navigation.navigate('Favourites');
          }}>
          <Text>
            Favourites{' '}
            <Text style={{color: 'pink', fontSize: 20}}>
              {' '}
              {reduxFav.fav.data.length}{' '}
            </Text>
          </Text>
        </Text>

        <Text
          style={{
            // backgroundColor: '#f2f2f2',
            color: 'black',
            fontWeight: '600',
            padding: 10,
            backgroundColor: '#0f1956',
            color: '#fff',
          }}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          Cart Items{' '}
          <Text style={{color: 'green', fontSize: 20}}>
            {reduxData.cart.data.length}
          </Text>
        </Text>
      </View>

      <FlatList
        data={allProducts}
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
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#5a992f',

                    padding: 4,
                    borderRadius: 3,
                  }}
                  onPress={() => {
                    console.log(addItemToCart(item.id));
                    // dispatch(addItemToCart(item));
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 14, fontWeight: '800'}}>
                    {' '}
                    Add To Cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    marginTop: 10,
                    padding: 4,
                    borderRadius: 4,
                    borderWidth: 2,
                    // backgroundColor:like ? "pink" : 'white'
                  }}
                  onPress={() => {
                    setLike(true);
                    dispatch(addItemToFav(item));

                    console.log(dispatch(addItemToFav(item.id)));
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 14, fontWeight: '800'}}>
                    {' '}
                    Add To Fav
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

export default Products;
