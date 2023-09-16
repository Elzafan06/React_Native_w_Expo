import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

const App = () => {
  const handleButtonPress = () => {
    // Lógica que você deseja executar quando o botão é pressionado
    alert('Botão pressionado!');
  };

  return (
    <ImageBackground
      source={{ uri: "https://png.pngtree.com/png-clipart/20230810/original/pngtree-do-not-press-red-button-isolated-round-distress-vector-picture-image_10240815.png" }}
      style={styles.container}
    >
      <View style={styles.content}>
        <ImageComponent source={{ uri: "https://png.pngtree.com/png-clipart/20230810/original/pngtree-do-not-press-red-button-isolated-round-distress-vector-picture-image_10240815.png" }} />
        <ImageComponent source={{ uri: "https://png.pngtree.com/png-clipart/20230810/original/pngtree-do-not-press-red-button-isolated-round-distress-vector-picture-image_10240815.png" }} />
        <ButtonComponent onPress={handleButtonPress} text="Pressione-me" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFAA', // Escolha a cor de fundo desejada
  },
  content: {
    alignItems: 'center',
  },
});

export default App;
