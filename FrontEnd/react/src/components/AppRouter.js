import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./layout/main/Main";
import Register from "./layout/register/register.js";
import Modify from "./layout/modify/modify.js";
import Login from "./layout/login/Login";
import Exit from "./Exit";
import { Redirect } from 'react-router';
import { AppContext } from './aplication/Provider';
import PrivateRoute from "./PrivateRoute";
import { useContext } from 'react';


export default function AppRouter() {
  
  const [state,]=useContext(AppContext);


  try{
    console.log("***user de approuter****");
    console.log(state.user);
    
  }catch(e){
    console.log(e);
  }

  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {state.user ? <Redirect to="/Main" /> : <Login />}
            </Route>
            <PrivateRoute path="/Exit" component={Exit} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/Main" component={Main} />            
            <Route path="/Register" component={Register} />            
            <PrivateRoute path="/Modify" component={Modify} />            
            <Route path="*">
              Pagina no encontrada
            </Route>
          </Switch>
      </BrowserRouter>

    </>
  )
}
