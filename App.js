import { StatusBar, SafeAreaView } from "react-native";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import Cesta from "./src/pages/Cesta";
import mock from "./src/mocks/cesta";
import { useCallback } from "react";

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) return null;

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
