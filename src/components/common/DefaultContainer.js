import styled from "styled-components/native";
import { StyleSheet, Platform, StatusBar } from "react-native";
const DefaultContainer = ({ children }) => {
  return (
    <Container style={safeViewAndroid.AndroidSafeArea}>{children}</Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const safeViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default DefaultContainer;
