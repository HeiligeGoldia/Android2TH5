import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';
import { dataList2 } from './Datalist.js';

export default function App() {
  const render = ({ item }) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View>
          <Image source={require('./imgs/Line1.png')}></Image>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.photo} style={{flex: 1}}></Image>
          <View style={{flex: 2, margin: 10, marginTop: 5}}>
            <Text style={{paddingBottom: 10}}>{item.name}</Text>
            <Text style={{}}>Shop  {item.shop}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=>{
              alert('chat')
            }} style={{backgroundColor: 'red', height: 40, width: 80, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{ fontSize: 16, color: 'white' }} > Chat </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      <View style={{backgroundColor: '#1BA9FF', height: 60, marginTop: 20, alignItems: 'center', flexDirection: 'row'}}>
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
      <Text style={{padding: 30, paddingTop: 20, paddingBottom: 20}}>Bạn có thắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
      <FlatList data={dataList2} renderItem={render} keyExtractor={item => item.id}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
