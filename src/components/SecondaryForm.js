import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
 
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
            let formData = {
                storeType: props.state.storeType,
                storeDetails: props.state.storeDetails,
                firstName: props.state.firstName,
                lastName: props.state.lastName,
                userRole: props.state.userRole,
                joinDate: props.state.joinDate,
                isInVictoria: props.state.isInVictoria,
                whereInVictoria: props.state.whereInVictoria
            }

            axios({
                method: 'post',
                url: 'https://webhook.site/4a21eba1-29d9-4b3c-adc5-2b178341bdfb',
                data: formData,
                })
                .then(function (response) {
                    //handle success
                    // console.log(response)
                })
                .catch(function (response) {
                    //handle error
                    // console.log(response)
            })
        } else {
            // Otherwise, show error message
            addToast(errorMessage, { appearance: 'error' })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="question" id="user-role">
                    <label>What is the users role?</label>
                    <select name="userRole" value={props.state.userRole} onChange={props.handleInputChange}>
                        <option></option>
                        <option>Dev</option>
                        <option>Manager</option>
                        <option>Student</option>
                    </select>
                </div>
                <div className="question" id="join-date">
                    <label>When did the user first join?</label>
                    <input type="date" name="joinDate" value={props.state.joinDate} onChange={props.handleInputChange}/>
                </div>
                <div className="question" id="is-in-Victoria">
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
                    <div className="question" id="user-location">
                        <label>Where in Victoria?</label>
                        <input type="text" name="whereInVictoria" value={props.state.whereInVictoria} onChange={props.handleInputChange} />
                    </div>
                }           
                <button onClick={goBack}>Back</button>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default withRouter(SecondaryForm)