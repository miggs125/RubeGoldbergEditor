import Toolbar from "./components/Toolbar";
import { Canvas } from "react-three-fiber";
import RenderArea from "./components/RenderArea";
import { AppContextProvider } from "./store";

import "./App.css";
const App = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <Toolbar />
        <RenderArea />
      </div>
    </AppContextProvider>
  );
};

export default App;
