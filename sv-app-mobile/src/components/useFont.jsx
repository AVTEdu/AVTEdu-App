import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    Roboto: require('../assets/fronts/Roboto-Black.ttf')
  });