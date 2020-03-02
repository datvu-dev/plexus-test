import React, { Component } from "react";
 
const MainForm = (props) => {

    return (
        <div>
            <form>
                <div>
                <label>
                    Store Type:
                    <select value={props.state.storeType} onChange={props.handleInputChange}>
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
            </form>
        </div>
    );
}
 
export default MainForm;