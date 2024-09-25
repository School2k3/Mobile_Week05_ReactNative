import * as React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
  const price = '1.790.000 đ';
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={require('./images/vs_blue.png')} />
      </View>
      <View
        style={{
          marginBottom: 8,
        }}>
        <Text style={styles.title}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.review}>
        <Image style={styles.starSize} source={require('./images/star.png')} />
        <Image style={styles.starSize} source={require('./images/star.png')} />
        <Image style={styles.starSize} source={require('./images/star.png')} />
        <Image style={styles.starSize} source={require('./images/star.png')} />
        <Image style={styles.starSize} source={require('./images/star.png')} />
        <Text
          style={{
            marginLeft: 40,
          }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceBold}>{price}</Text>
        <Text style={styles.priceLineThrough}>{price}</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.redText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>
      <View style={styles.buttonPlace}>
        <TouchableOpacity
          style={styles.chooseColorButton}
          onPress={() => navigation.navigate('Details')}>
          <Text style={styles.chooseColorText}>4 MÀU-CHỌN MÀU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <Image
          style={{ height: 140, width: 110, marginRight: 12 }}
          source={require('./images/vs_blue.png')}
        />
        <View>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.chooseColorBackground}>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  image: {
    height: 261,
    width: 201,
    margin: 12,
  },
  title: {
    fontSize: 14,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starSize: {
    height: 25,
    width: 23,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceBold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceLineThrough: {
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 52,
  },
  redText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonPlace: {
    flex: 2,
    justifyContent: 'space-between',
  },
  chooseColorButton: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
  },
  chooseColorText: {
    fontSize: 14,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 8,
  },
  buyText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  chooseColorBackground: {
    flex: 4,
    backgroundColor: '#C4C4C4'
  }
});

export default App;
