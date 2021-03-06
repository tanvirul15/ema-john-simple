import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import ProductDetails from "./component/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/review/">
              <Review></Review>
            </Route>
            <Route path="/shop/">
              <Shop />
            </Route>
            <Route path="/manage">
              <Inventory></Inventory>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route exact path="/">
              <Shop />
            </Route>
            {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
