import * as React from "react";
import { WebView } from "react-native-webview";
import DefaultContainer from "./DefaultContainer";

class WebContainer extends React.Component {
  render() {
    return (
      <DefaultContainer>
        <WebView
          onError={(e) => alert(e)}
          source={{ uri: "https://cheajib-client.web.app/" }}
        />
      </DefaultContainer>
    );
  }
}

export default WebContainer;
