import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => console.log('Forgot password clicked')}>
        <Text style={styles.forgotText}>Forgot?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Login clicked')}>
        <Text style={styles.buttonText}>LOGIN →</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <TouchableOpacity onPress={() => console.log('Navigate to Signup')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FAFAFA' },
  title: { fontSize: 28, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '500', marginTop: 10 },
  input: { backgroundColor: '#FFF', padding: 12, borderRadius: 8, marginTop: 5, borderWidth: 1, borderColor: '#DDD' },
  forgotText: { color: '#FFA500', alignSelf: 'flex-end', marginTop: 5 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  signupText: { marginTop: 20, textAlign: 'center', color: '#666' },
  linkText: { color: '#FFA500', fontWeight: 'bold' },
});

export default LoginView;
