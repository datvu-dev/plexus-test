import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { useToasts } from 'react-toast-notifications'
import Autocomplete from 'react-autocomplete'
 
const MainForm = (props) => {
    const { addToast } = useToasts()
    let errorMessage = ''

    const handleSubmit = (event) => {
        event.preventDefault()

        switch (true) {
            case (props.state.storeType == ''):
                errorMessage = 'Store Type is required'
                break
            case (props.state.storeType == 'Metro' && props.state.storeDetails == ''):
                errorMessage = 'Please provide details for Metro store type'
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
                { props.state.storeType == 'Metro' &&
                    <div>
                        <label>
                            Provide Details:
                            <input type="text" name="storeDetails" value={props.state.storeDetails} onChange={props.handleInputChange}/>
                        </label>
                    </div>
                }
                <div>
                    <label>
                        Search user:
                        <Autocomplete
                            getItemValue={(item) => item.fullname}
                            items={props.state.userList}
                            shouldItemRender={(item, value) => item.fullname.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            renderItem={(item, isHighlighted) =>
                                <div key={props.state.userList.indexOf(item)} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                    {item.fullname}
                                </div>
                            }
                            name="userLookUp" 
                            value={props.state.userLookUp} onChange={props.handleInputChange}
                            onSelect={(value, item) => props.handleUserSelection(value, item)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={props.state.firstName} onChange={props.handleInputChange} disabled/>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={props.state.lastName} onChange={props.handleInputChange} disabled/>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default withRouter(MainForm);