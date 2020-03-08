import React, { Component } from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { ToastProvider } from 'react-toast-notifications'
import Page from './components/Page'
import Content from './components/Content'
import MainForm from "./components/MainForm"
import SecondaryForm from "./components/SecondaryForm"
import axios from 'axios'

const initialState = {
    storeType: '',
    storeDetails: '',
    userLookUp: '',
    userList: [],
    firstName: '',
    lastName: '',
    userRole: '',
    joinDate: '',
    isInVictoria: '',
    whereInVictoria: ''
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = initialState

        this.handleStateReset = this.handleStateReset.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUserLookup = this.handleUserLookup.bind(this)
        this.handleUserSelection = this.handleUserSelection.bind(this)
    }

    handleStateReset() {
        this.setState({...initialState})
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name ? target.name : 'userLookUp'
  
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
            <Page>
                <Router>
                    <ToastProvider autoDismiss placement="top-center">
                        <Content>
                            <Route exact path="/" render={() => 
                                <MainForm 
                                    state={this.state} 
                                    handleInputChange={this.handleInputChange}
                                    handleUserSelection={this.handleUserSelection}
                                />} 
                            />
                            <Route path="/next" render={() => 
                                <SecondaryForm 
                                    state={this.state} 
                                    handleInputChange={this.handleInputChange}
                                    handleStateReset={this.handleStateReset}
                                />}  
                            />
                        </Content>
                    </ToastProvider>
                </Router>
            </Page>
        )
    }
}
 
export default App