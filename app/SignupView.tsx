import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignupView = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back to login')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
      />

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

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Up clicked')}>
        <Text style={styles.buttonText}>SIGN UP →</Text>
      </TouchableOpacity>

      {/* Sign in Link */}
      <Text style={styles.signinText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => console.log('Navigate to Login')}>
          <Text style={styles.linkText}>Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FAFAFA' },
  backButton: { position: 'absolute', top: 50, left: 20 }, 
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center' },
  label: { fontSize: 14, fontWeight: '500', marginTop: 10 },
  input: { backgroundColor: '#FFF', padding: 12, borderRadius: 8, marginTop: 5, borderWidth: 1, borderColor: '#DDD' },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  signinText: { marginTop: 20, textAlign: 'center', color: '#666' },
  linkText: { color: '#FFA500', fontWeight: 'bold' },
});

export default SignupView;
