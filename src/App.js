import React, { Component } from "react";
import {Route, BrowserRouter as Router, useHistory} from "react-router-dom";
import MainForm from "./components/MainForm";
import SecondaryForm from "./components/SecondaryForm";
 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeType: '',
            storeDetails: '',
            firstName: '',
            lastName: '',
            userRole: '',
            joinDate: null,

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  render() {
    return (
        <div>
          <Router>
            <div className="content">
              <Route exact path="/" render={() => 
                  <MainForm 
                      state={this.state} 
                      handleInputChange={this.handleInputChange} 
                  />} 
              />
              <Route path="/next" component={SecondaryForm} />
            </div>
          </Router>
        </div>
    );
  }
}
 
export default App;