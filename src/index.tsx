import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import CellWrapper from "./components/CellWrapper";

const App = () => {
  return (
    <Provider store={store}>
      <CellWrapper />
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
