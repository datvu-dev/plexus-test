import React from "react"
import $ from 'jquery'
import { withRouter } from "react-router-dom"
import { useToasts } from 'react-toast-notifications'
import axios from 'axios'
import { Input, Select } from './Input'
import Label from './Label'
import Button from './Button'
 
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
                $('#join-date input').trigger('focus')
                errorMessage = 'Please specify when the user joined'
                break
            case (props.state.isInVictoria == ''):
                errorMessage = 'Please confirm if the user is in Victoria'
                break
            case (props.state.isInVictoria == 'yes' && props.state.whereInVictoria == ''):
                $('#user-location input').trigger('focus')
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
                    props.history.push('/')
                    props.handleStateReset()

                    addToast('Thanks! We received your details.', { appearance: 'success' })
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
                    <Label>What is the users role?</Label>
                    <Select name="userRole" value={props.state.userRole} onChange={props.handleInputChange}>
                        <option></option>
                        <option>Dev</option>
                        <option>Manager</option>
                        <option>Student</option>
                    </Select>
                </div>
                <div className="question" id="join-date">
                    <Label>When did the user first join?</Label>
                    <Input type="date" name="joinDate" value={props.state.joinDate} onChange={props.handleInputChange}/>
                </div>
                <div className="question" id="is-in-Victoria">
                    <p>Is this person located in Victoria?</p>
                        <Input type="radio" id="yes" name="isInVictoria" value="yes" 
                            onChange={props.handleInputChange} 
                            checked={props.state.isInVictoria === "yes"} 
                        /> 
                        Yes
                        <Input type="radio" id="no" name="isInVictoria" value="no" 
                            onChange={props.handleInputChange} 
                            checked={props.state.isInVictoria === "no"} 
                        /> 
                        No
                </div>
                { props.state.isInVictoria == 'yes' &&
                    <div className="question" id="user-location">
                        <Label>Where in Victoria?</Label>
                        <Input type="text" name="whereInVictoria" value={props.state.whereInVictoria} onChange={props.handleInputChange} />
                    </div>
                }           
                <Button onClick={goBack}>Back</Button>
                <Button type="submit" primary >Submit</Button>
            </form>
        </div>
    )
}
 
export default withRouter(SecondaryForm)