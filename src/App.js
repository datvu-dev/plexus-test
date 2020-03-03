import React, { Component } from "react";
import {Route, BrowserRouter as Router, useHistory} from "react-router-dom";
import MainForm from "./components/MainForm";
import SecondaryForm from "./components/SecondaryForm";
import axios from 'axios'
 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeType: '',
            storeDetails: '',
            userLookUp: '',
            userList: [],
            firstName: '',
            lastName: '',
            userRole: '',
            joinDate: null,

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUserLookup = this.handleUserLookup.bind(this);
        this.handleUserSelection = this.handleUserSelection.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name ? target.name : 'userLookUp';
 
      this.setState({
        [name]: value
      }, () => {
        if (name == 'userLookUp') {
          this.handleUserLookup()
        }
      })
    }

    handleUserLookup() {
        let self = this

        // Retrieve list of user
        axios.get('https://randomuser.me/api/?results=50&nat=au&inc=name')
        .then(function (response) {
            // Refine array and add an attribute that contains full name
            let users = response.data.results.map((item) => {
                let newItem = item.name
                newItem.fullname = item.name.first + ' ' + item.name.last

                return newItem
            } )

            self.setState({userList: users})
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    handleUserSelection(value, item) {
        // Populate selected user into First Name and Last Name
        this.setState({
          firstName: item.first,
          lastName: item.last,
          userLookUp: ''
        })
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
                      handleUserSelection={this.handleUserSelection}
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