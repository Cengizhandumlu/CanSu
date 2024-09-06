
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const AddressSearch = () => {
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Teslimat adresi girin"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default AddressSearch;