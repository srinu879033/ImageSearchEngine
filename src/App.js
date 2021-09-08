import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./components/Search";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ zIndex: -1 }}>
        <SearchEngine />
      </div>
    </Provider>
  );
}

export default App;
