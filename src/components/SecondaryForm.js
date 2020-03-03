import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { useToasts } from 'react-toast-notifications'
 
const SecondaryForm = (props) => {
    const { addToast } = useToasts()
    let errorMessage = ''

    const goBack = () => {
        props.history.push('/')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        switch (true) {
            case (props.state.joinDate == ''):
                errorMessage = 'Please specify when the user joined'
                break
            case (props.state.isInVictoria == ''):
                errorMessage = 'Please confirm if the user is in Victoria'
                break
            case (props.state.isInVictoria == 'yes' && props.state.whereInVictoria == ''):
                errorMessage = 'Please specify where the user lives in Victoria'
                break
        }

        if (errorMessage == '') {
            // If all inputs are valid, submit the form
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
                        What is the users role? 
                        <select name="userRole" value={props.state.userRole} onChange={props.handleInputChange}>
                            <option value="">-- please choose --</option>
                            <option value="Dev">Dev</option>
                            <option value="Manager">Manager</option>
                            <option value="Student">Student</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        When did the user first join?
                        <input type="date" name="joinDate" value={props.state.joinDate} onChange={props.handleInputChange}/>
                    </label>
                </div>
                <div>
                    <p>Is this person located in Victoria?</p>
                    <label>
                        <input type="radio" id="yes" name="isInVictoria" value="yes" 
                            onChange={props.handleInputChange} 
                            checked={props.state.isInVictoria === "yes"} 
                        />
                        Yes
                    </label>
                    <label>
                        <input type="radio" id="no" name="isInVictoria" value="no" 
                            onChange={props.handleInputChange} 
                            checked={props.state.isInVictoria === "no"} 
                        />
                        No
                    </label>
                </div>
                { props.state.isInVictoria == 'yes' &&
                    <div>
                        <label>
                            Where in Victoria?
                            <input type="text" name="whereInVictoria" value={props.state.whereInVictoria} onChange={props.handleInputChange} />
                        </label>
                    </div>
                }           
                <button onClick={goBack}>Back</button>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default withRouter(SecondaryForm)