import { Route, Switch } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound";
import CartDetail from "../carts/CartDetail";




function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} ></Route>
        <Route path="/card" exact component={CartDetail} ></Route>
        <Route component={NotFound} ></Route>
      </Switch>
      {/* <Dashboard/> */}

    </Container>
  );
}

export default App;
