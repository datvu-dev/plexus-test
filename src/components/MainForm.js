import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
 
const MainForm = (props) => {
    const { addToast } = useToasts()
    let errorMessage = ''

    const handleSubmit = (event) => {
        event.preventDefault()

        switch (true) {
            case (props.state.storeType == ''):
                errorMessage = 'Store Type is required'
                break
            case (props.state.firstName == ''):
                errorMessage = 'First Name is required'
                break
            case (props.state.lastName == ''):
                errorMessage = 'Last Name is required'
                break
        }

        if (errorMessage == '') {
            // If all inputs are valid, proceed to next form (page 2)
            props.history.push('/next')
        } else {
            // Otherwise, show error message
            addToast(errorMessage, { appearance: 'error' })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                    Store Type:
                    <select name="storeType" value={props.state.storeType} onChange={props.handleInputChange}>
                        <option value="">-- please choose --</option>
                        <option value="Mall">Mall</option>
                        <option value="Metro">Metro</option>
                        <option value="Arcade">Arcade</option>
                        <option value="Centre">Centre</option>
                    </select>
                </label>
                </div>
                <div>
                    <label>
                        Provide Details:
                        <input type="text" name="storeDetails" value={props.state.storeDetails} onChange={props.handleInputChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={props.state.firstName} onChange={props.handleInputChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={props.state.lastName} onChange={props.handleInputChange}/>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default withRouter(MainForm);