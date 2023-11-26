import { Route, Redirect, useLocation } from "react-router-dom";
import {  useContext } from 'react';
import { AppContext } from './aplication/Provider';

export default function PrivateRoute({ component: Component, ...rest }) {
  
  const [state,]=useContext(AppContext);

  const location = useLocation();
  
  return (
    <Route {...rest}>
      {state.user ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} />
      )}

    </Route>
  );
}



/*
  return (
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login" , state: { from: location }}} />
      )}
    </Route>
  );
}

*/