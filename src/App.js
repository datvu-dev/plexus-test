import React, { Component } from "react";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import MainForm from "./components/MainForm";
import SecondaryForm from "./components/SecondaryForm";
 
class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <div>
              <Link to="/">home</Link>
              <Link to="/next">next</Link>
            </div>
            <div className="content">
              <Route exact path="/" component={MainForm}/>
              <Route path="/next" component={SecondaryForm} />
            </div>
          </Router>
        </div>
    );
  }
}
 
export default App;