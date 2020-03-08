import React from "react"
import $ from 'jquery'
import { withRouter } from "react-router-dom"
import { useToasts } from 'react-toast-notifications'
import Autocomplete from 'react-autocomplete'
import { Input, Select } from './Input'
import Label from './Label'
import Button from './Button'

 
const MainForm = (props) => {
    const { addToast } = useToasts()
    let errorMessage = ''

    const handleSubmit = (event) => {
        event.preventDefault()

        switch (true) {
            case (props.state.storeType == ''):
                $('#store-type select').trigger('focus')
                errorMessage = 'Store Type is required'
                break
            case (props.state.storeType == 'Metro' && props.state.storeDetails == ''):
                $('#store-details input').trigger('focus')
                errorMessage = 'Please provide details for Metro store type'
                break
            case (props.state.firstName == '' || props.state.lastName == ''):
                $('#user-lookup input').trigger('focus')
                errorMessage = 'Please search for a user'
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
                <div className="question" id="store-type">
                    <Label>Store Type</Label>
                    <Select name="storeType" defaultValue={props.state.storeType} onChange={props.handleInputChange}>
                        <option></option>
                        <option>Mall</option>
                        <option>Metro</option>
                        <option>Arcade</option>
                        <option>Centre</option>
                    </Select>
                </div>
                { props.state.storeType == 'Metro' &&
                    <div className="question" id="store-details">
                        <Label>Provide Details</Label>
                        <Input type="text" name="storeDetails" defaultValue={props.state.storeDetails} onChange={props.handleInputChange}/>
                    </div>
                }
                <div className="question" id="user-lookup">
                    <Label>Search User</Label>
                    <Autocomplete
                        getItemValue={(item) => item.fullname}
                        items={props.state.userList}
                        shouldItemRender={(item, value) => item.fullname.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        renderInput={(props) =>
                            <Input {...props} />
                        }
                        renderItem={(item, isHighlighted) =>
                            <div key={props.state.userList.indexOf(item)} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.fullname}
                            </div>
                        }
                        wrapperStyle={{display: 'block'}}
                        name="userLookUp" 
                        defaultValue={props.state.userLookUp} 
                        onChange={props.handleInputChange}
                        onSelect={(value, item) => props.handleUserSelection(value, item)}
                    />
                </div>
                <div className="question" id="first-name">
                    <Label>First Name</Label>
                    <Input type="text" name="firstName" defaultValue={props.state.firstName} onChange={props.handleInputChange} disabled/>
                </div>
                <div className="question" id="last-name">
                    <Label>Last Name</Label>
                    <Input type="text" name="lastName" defaultValue={props.state.lastName} onChange={props.handleInputChange} disabled/>
                </div>
                <Button primary type="submit">Next</Button>
            </form>
        </div>
    )
}
 
export default withRouter(MainForm)