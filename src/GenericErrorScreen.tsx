import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export class GenericErrorScreen extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{'Sorry!!'}</Text>
            <View>
              <Text style={styles.subtitle}>
                {
                  'Sorry, something has gone wrong at our end. Please come back later.'
                }
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Close'}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default GenericErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'green',
    height: 60,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    margin: 15,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    padding: 60,
    textAlign: 'center',
  },
  subtitle: {
    padding: 20,
    marginTop: 10,
    textAlign: 'center',
  },
});
