import { Provider } from "jotai";
import { UIProvider } from "@yamada-ui/react";
// import './App.css'
import "./index.css";
import Kadai1 from "./pages/Kadai1";
import Kadai2 from "./pages/Kadai2";
import Kadai3 from "./pages/Kadai3";
import Kadai4 from "./pages/Kadai4";
// import Demo1 from "./pages/Demo1";
import { Route, Switch } from "wouter";

function App() {
  return (
    <Provider>
      <UIProvider>
        <Switch>
          <Route path="/" component={Kadai1} />
          <Route path="/Kadai2" component={Kadai2} />
          <Route path="/Kadai3" component={Kadai3} />
          <Route path="/Kadai4" component={Kadai4} />
          {/* <Route path="/demo1" component={Demo1} /> */}
          <Route>
            <h2>404 not found</h2>
          </Route>
        </Switch>
      </UIProvider>
    </Provider>
  );
}

export default App;
