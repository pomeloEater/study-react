import { createRoot } from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
