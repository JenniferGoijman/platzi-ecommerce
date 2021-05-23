import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import { Layout } from '../components/Layout';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap");

  body {
    margin: 0;
    padding: 0;
    color: #3c484e;
    font-family: 'Open Sans', sans-serif;
  }
`;


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
