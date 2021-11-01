import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

class App extends React.Component {
  render() {
    return (
      <div>
        <ChakraProvider theme={theme}>
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/login" component={Login} />
                <Route component={PageNotFound} />
              </Switch>
          </Router>
        </ChakraProvider>
      </div>
    );
  }
}

export default App;
