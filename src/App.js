import { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./utils/theme";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Image } from "react-native";

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAsset = async () => {
    const imageAsset = cacheImages([require("../assets/splash.png")]);
    await Promise.all([...imageAsset]);
  };
  return isReady ? (
    <ThemeProvider theme={theme}></ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAsset}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
