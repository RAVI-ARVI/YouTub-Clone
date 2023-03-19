import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utiles/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
    /* 
    --Header
    --Body
      --side nav
        --menu items
      --maincontainer
        --buttons list
        --video container
        --video card 
    */
  );
}

export default App;
