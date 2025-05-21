import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import React from 'react';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [mail, onEntermail] = React.useState('');
  const [pass, onEnterpass] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.subtext}>
            Enter your email below to login to your account
          </Text>
        </View>
        <Image
          source={require('../assets/translate.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.credentials}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onEntermail}
          value={mail}
          placeholder="Admin@example"
          keyboardType="email-address"
        />
        <View style={styles.password}>
            <Text style={styles.label}>Password</Text>
            <Text style={styles.forgot}>Forgot password ?</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onEnterpass}
          value={pass}
          placeholder="Password"
          keyboardType="visible-password"
        />
      </View>
      <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('ERP')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginbtn, styles.googlebtn]} onPress={() => {}}>
        <Text style={[styles.buttonText, styles.googlebtnText]}>Login with Google</Text>
      </TouchableOpacity>
      <Text style={styles.signUp}>Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  credentials:{
    flexDirection:'column',
    alignItems:'flex-start',
    padding: 10,
    width:'90%',
  },
  label:{
    fontSize: 14,
    fontWeight:'400',
  },
  input: {
    height: 40,
    width:'100%',
    marginVertical: 10,
    borderWidth: 0.5,
    borderRadius:10,
    borderColor:'#999999',
    paddingVertical:10,
    paddingHorizontal:15,
  },
  password:{
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between',
    width:'95%',
  },
  forgot: {
    fontSize: 14,
    textAlign: 'right',
    color: '#999999',
  },
  loginbtn: {
    width: '85%',
    backgroundColor: '#0f172a',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  googlebtn: {
    backgroundColor: '#fff',
  },
  googlebtnText:{
    color:'#000',
  },
  signUp:{
    margin:10,
  }
});

export default Login;
