import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';
const promise = loadStripe('pk_test_51LrfmDEARBHT5oPJFQb3pndq1ke6q1oUSyRnaPyZN4nw6zPMjSgg7N2jq8I7i5Ht8CMshDkP9oQEXWDfNs3K7bSe00y7e4rErD')

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('user==>', authUser);

      if (authUser) {
        // LoggedIN
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // Logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }

    })
  }, [])


  return (
    // BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements >
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
