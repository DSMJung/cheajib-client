import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
