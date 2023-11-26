import './App.css';
import React from 'react';
import AppRouter from "./components/AppRouter";
import MyProvider from './components/aplication/Provider'


function App() {

 
  return (
    <MyProvider>
     <AppRouter />
     </MyProvider>
  );
}

export default App;
