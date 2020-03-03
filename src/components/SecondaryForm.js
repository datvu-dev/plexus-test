import React, { Component } from "react";
import {withRouter} from "react-router-dom"
 
const SecondaryForm = (props) => {
    return (
        <div>
            <form>
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
                <div>
                    <label>
                        Where in Victoria?
                        <input type="text" name="whereInVictoria" value={props.state.whereInVictoria} onChange={props.handleInputChange} />
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default withRouter(SecondaryForm)