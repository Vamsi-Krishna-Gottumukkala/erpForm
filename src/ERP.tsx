import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import React from 'react';

const ERP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text style={styles.heading}>Welcome back!</Text>
          <Text style={styles.subtext}>
            Here's a list of your ERP Systems for you!
          </Text>
        </View>
        <Image
          source={require('../assets/translate.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.block}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Text>ERP 1</Text>
          <Text>15 Froms</Text>
        </View>
        <View style={styles.box}>
          <Text>ERP 2</Text>
          <Text>15 Froms</Text>
        </View>
      </View>

      <View style={styles.top}>
        <View style={styles.box}>
          <Text>ERP 3</Text>
          <Text>15 Froms</Text>
        </View>
        <View style={styles.box}>
          <Text>ERP 4</Text>
          <Text>15 Froms</Text>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.box}>
          <Text>ERP 5</Text>
          <Text>15 Froms</Text>
        </View>
        <View style={styles.box}>
          <Text>ERP 6</Text>
          <Text>15 Froms</Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:"100%",
    paddingTop:80,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'85%'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999999',
  },
  image: {
    height: 20,
    color: '#ffffff',
  },
  block:{
    alignItems:'center',
    margin:10,
    width:'100%',
  },
  top:{
    flexDirection:'row',
    width:'95%',
    justifyContent:'center',
  },
  box:{
    width:'45%',
    minHeight:'20%',
    borderRadius:20,
    borderColor:'#000',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    margin:8,
  }
});

export default ERP;
