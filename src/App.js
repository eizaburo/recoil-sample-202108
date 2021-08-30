import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route render={() => <p>Page not found.</p>} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
