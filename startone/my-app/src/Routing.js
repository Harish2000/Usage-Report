import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom'
import Table from "./Table";
import App from "./App"
import { Routes } from "react-router-dom"
class Routing extends React.Component 
{
   render() 
   {
        return (
     
                  <Routes >
                     
                      <Route exact path="/" element={<App />}/>
                        <Route exact path="/Table" element={<Table />}/>
                  </Routes>
               )
   }
}
export default Routing;