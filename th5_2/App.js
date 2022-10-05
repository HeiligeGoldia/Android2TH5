import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, View , Image, TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { dataList2 } from './Datalist.js';

export default function App() {
  const render = ({ item }) => {
    return (
      <View style={{width: 150, height: 220, marginLeft: 20}}>
        <View style={{flex: 5}}>
          <Image source={item.photo}></Image>
        </View>
        <View style={{flex: 4}}>
          <View style={{flex: 2, width: 150, marginLeft: 12}}>
            <Text>{item.name}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: 150, marginLeft: 10}}>
            <AirbnbRating count={5} reviewSize={0} defaultRating={item.rating} size={15} />
            <Text style={{fontSize: 12, paddingTop: 20}}> ({item.rateNum})</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', width: 150, marginLeft: 10, paddingTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>{item.price}    </Text>
            <Text style={{color: '#969DAA'}}>  {item.discount}</Text>
          </View>
        </View>

      </View>
    );
  }
  return (
    <View>
      <View style={{backgroundColor: '#1BA9FF', height: 60, marginTop: 25, marginBottom: 20, alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: 20}} onPress={()=>{
          alert('back')
        }}>
          <Image source={require('./imgs/left.png')}></Image>
        </TouchableOpacity>
        <Text style={{marginLeft: 110, color: 'white', fontSize: 20}}>Chat</Text>
        <TouchableOpacity style={{marginLeft: 120}} onPress={()=>{
          alert('cart')
        }}>
          <Image source={require('./imgs/cart.png')}></Image>
        </TouchableOpacity>
      </View>
      <FlatList data={dataList2} numColumns={2} renderItem={render} keyExtractor={item => item.id}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
