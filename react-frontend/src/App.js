import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/Header";
import {AllEmployees} from "./components/AllEmployees";
import {EmployeeDetails} from "./components/EmployeeDetails";
import {AddEmployee} from "./components/AddEmployee";
import {UpdateEmployee} from "./components/UpdateEmployee";
function App() {
  return (
    <div>
        <Header />
        <Router>
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {AllEmployees}></Route>
                          <Route path = "/employees" component = {AllEmployees}></Route>
                          <Route path = "/add-employee" component = {AddEmployee}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployee}></Route>
                          <Route path = "/view-employee/:id" component = {EmployeeDetails}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>

  );
}

export default App;
