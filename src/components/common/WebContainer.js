import * as React from "react";
import { WebView } from "react-native-webview";
import DefaultContainer from "./DefaultContainer";

class WebContainer extends React.Component {
  render() {
    return (
      <DefaultContainer>
        <WebView source={{ uri: "http://localhost:3000" }} />
      </DefaultContainer>
    );
  }
}

export default WebContainer;
