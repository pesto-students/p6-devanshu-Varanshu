import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Room from "./components/Room";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/FlipReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Room />
    </StrictMode>
  </Provider>
);
