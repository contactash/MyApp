import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
};

const Counter: React.FC<Props> = ({title}: Props) => {
  const [count, setCount] = useState<number>(0);

  function increment() {
    return setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>{'Increment'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCount(count - 1);
          }}
          style={styles.button}>
          <Text>{'Decrement'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Counter;
