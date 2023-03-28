import React from "react";
import { StyleSheet, Image, View } from "react-native";
import logo from "../../../../assets/logo.png";
import Texto from "../../../components/Texto";

export default function Detalhes() {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de Verduras</Texto>
      <View style={estilos.viewLogoNome}>
        <Image style={estilos.imagem} source={logo} />
        <Texto style={estilos.empresa}>Jenny Jack Farm</Texto>
      </View>
      <Texto style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha.
      </Texto>
      <Texto style={estilos.valor}>R$ 40,00</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
    viewLogoNome:{
      flexDirection:"row",
      paddingVertical:12
    },
    imagem:{
      width:32,
      height:32,
    },
    nome: {
      fontSize: 26,
      lineHeight:42,
      color:"#464646",
      fontWeight:"bold"
    },
    empresa: {
      fontSize: 16,
      lineHeight:26,
      marginLeft:12,
      fontWeight:"normal"
    },
    descricao: {
      fontSize: 16,
      lineHeight:26,
      color: "#a3a3a3",
      marginTop: 10,
    },
    valor: {
      fontSize: 26,
      lineHeight:42,
      fontWeight: "bold",
      color: "#2a9f85",
      marginTop:8
    },
  });
  
