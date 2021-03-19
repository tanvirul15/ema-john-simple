import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./component/Review/Review";
import Inventory from "./component/Inventory/Inventory";
import NotFound from "./component/NotFound/NotFound";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Login from "./component/Login/Login";
import Shipment from "./component/Shipment/Shipment";
import { createContext, useState } from "react";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <div>
      <userContext.Provider value={[loggedinUser, setLoggedinUser]}>
        <Router>
          <Header />
          <div className='container'>
            <h1>{loggedinUser.displayName}</h1>

            <Switch>
              <Route path='/review/'>
                <Review></Review>
              </Route>
              <Route path='/shop/'>
                <Shop />
              </Route>
              <Route path='/manage'>
                <Inventory></Inventory>
              </Route>
              <Route path='/product/:productKey'>
                <ProductDetails></ProductDetails>
              </Route>
              <Route exact path='/'>
                <Shop />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <PrivateRoute exact path='/shipment'>
                <Shipment />
              </PrivateRoute>
              {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
            </Switch>
          </div>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
