import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";

export default function Cesta() {
  return (
    <>
      <Topo />

      <View style={estilos.view}>
        <Detalhes />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  view: {
    paddingVertical:8,
    paddingHorizontal:16
  },
});
