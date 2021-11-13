import Home from "./Pages/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from "./Pages/Products/Products/Products";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Notfound from "./Pages/Notfound/Notfound";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Signup from "./Pages/LogIn/Signup/Signup";
import Signin from "./Pages/LogIn/Signin/Signin";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivaateRoute";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/products">
            <Products></Products>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:productId">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;


