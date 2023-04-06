import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';
import { Card } from 'vhp-component-library';
import { CardContent } from 'vhp-component-library';
import { TextButton } from 'vhp-component-library';
import {BasicHeader} from 'vhp-component-library'

import './Styles/SpiffForm.css'

export class SpiffForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            TechID:props.TechID,
            TechLName:props.TechLName||"",
            TechFName:props.TechFName||"",
            CustLName:props.CustLName||"",
            CustFName:props.CustFName||"",
            Address:props.Address||"",
            WO:props.WO||"",
            SpiffFor:props.SpiffFor||"",
            ReferTo:props.ReferTo||"",
			reqClasses:{
				TechFName:"",
				TechLName:"",
				CustFName:"",
				CustLName:"",
				Address:"",
				WO:""
			}
        }

        this.SetProperty = this.SetProperty.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
		this.GetForm = this.GetForm.bind(this)
    }

    SetProperty(value, property) {
        this.setState({
            [property]: value
        })
    }

    /**
     * Verifies form is complete, and preps and passes along data.
     */
    SubmitForm() {
        if (this.state.TechFName==""||
        this.state.TechLName==""||
        this.state.Address==""||
        this.state.WO==""||
        this.state.CustFName==""||
        this.state.CustLName=="") {
            let req = JSON.parse(JSON.stringify(this.state.reqClasses))
			for (let innerkey in req) {
				if (this.state[innerkey] == "") {
					console.log("spiff form-item-empty", innerkey)
					req[innerkey] = "form-item-empty"
				} else {
					req[innerkey] = ""
				}
			}
			this.setState({
				reqClasses:req
			})
        } else {
            //Get the values of objects in state
            let SpiffFor = ""
            let ReferTo = ""
            let TechID = ""
            if (typeof this.state.SpiffFor == 'object') {SpiffFor = this.state.SpiffFor.value}
            if (typeof this.state.ReferTo == 'object') {ReferTo = this.state.ReferTo.value}
            if (typeof this.state.TechID == 'object') {TechID = this.state.TechID.value}
            
            //Create a new entry in the right order, because apparently that matters
            let newData = {
                TechID: TechID,
                Date:new Date().toISOString().split("T")[0],
                WO:this.state.WO,
                Address:this.state.Address,
                CustLName:this.state.CustLName,
                CustFName:this.state.CustFName,
                ReferTo:ReferTo,
                SpiffFor:SpiffFor,
                paid:0,
                comments:"",
                status:"O",
                TechFName:this.state.TechFName,
                TechLName:this.state.TechLName,
				FormID:new Date()
            }
			if (this.props.user != undefined) {
				newData.editor = [{
					user:this.props.user,
					date:new Date()
				}]
			}
            this.props.SaveFunction(newData)
            this.props.CloseFunction()
        }
    }

	GetForm() {
		let formdata = [
			{
				value:"Tech ID",
				class:"header spiff-form",
				id:"Tech-Header"
			},
			{
				selected:this.state.TechID,
				list:this.props.UserList,
				ChangeFunction:this.SetProperty,
				data:"TechID",
				inputType:"DropDown",
				id:"Tech-ID"
			},
			{
				value:"Technician Name",
				class:"header spiff-form",
				id:"Tech-Name-Header"
			},
			{
				value:this.state.TechFName,
				title:"First Name",
				ChangeFunction:this.SetProperty,
				data:"TechFName",
				inputType:"TextInput",
				id:"Tech-FName",
				formItemClass:this.state.reqClasses.TechFName
			},
			{
				value:this.state.TechLName,
				title:"Last Name",
				ChangeFunction:this.SetProperty,
				data:"TechLName",
				inputType:"TextInput",
				id:"Tech-LName",
				formItemClass:this.state.reqClasses.TechLName
			},
			{
				value:"Customer Name",
				class:"header spiff-form",
				id:"Cust-Name-Header"
			},
			{
				value:this.state.CustFName,
				title:"First Name",
				ChangeFunction:this.SetProperty,
				data:"CustFName",
				inputType:"TextInput",
				id:"Cust-FName",
				formItemClass:this.state.reqClasses.CustFName
			},
			{
				value:this.state.CustLName,
				title:"Last Name",
				ChangeFunction:this.SetProperty,
				data:"CustLName",
				inputType:"TextInput",
				id:"Cust-LName",
				formItemClass:this.state.reqClasses.CustLName
			},
			{
				value:"Client Street Address Only (Example: 123 Vogel St)",
				class:"header spiff-form",
				id:"Address-Header"
			},
			{
				value:this.state.Address,
				title:"Address Line 1",
				ChangeFunction:this.SetProperty,
				data:"Address",
				inputType:"TextInput",
				id:"Address-spiff-form",
				formItemClass:this.state.reqClasses.Address
			},
			{
				value:"WO Number",
				class:"header spiff-form",
				id:"WO-Header"
			},
			{
				value:this.state.WO,
				title:"What is the Job Number that you collected the money and completed the project/enrollment/referral on?",
				ChangeFunction:this.SetProperty,
				data:"WO",
				inputType:"TextInput",
				id:"WO-number",
				formItemClass:this.state.reqClasses.WO
			},
			{
				value:"What are you turning in a spiff for?",
				class:"header spiff-form",
				id:"Spiff-For-Header"
			},
			{
				value:this.state.SpiffFor,
				title:"Please indicate what you are turning in a spiff request for by selecting from this drop down list.",
				ChangeFunction:this.SetProperty,
				data:"SpiffFor",
				inputType:"DropDown",
				list:this.props.SpiffForList,
				selected:this.props.SpiffForList[0],
				id:"spiff-for"
			},
			{
				value:"Who was the Equipment Referral turned over to?",
				class:"header spiff-form",
				id:"Refer-To-Header"
			},
			{
				value:this.state.ReferTo,
				title:"If this was an equipment referral, who did you call?",
				ChangeFunction:this.SetProperty,
				data:"ReferTo",
				inputType:"DropDown",
				list:this.props.ReferToList,
				selected:this.props.ReferToList[this.props.ReferToList.length-1],
				id:"refer-to"
			},
		]

		return(<InputForm formdata = {formdata}/>)
	}

    render() {
        return(
            <Card
                titlebar={true}
                title="Service Division Spiff Submittal"
                cardClass = "spiff-submit-form"
                actions ={{minimize:null, close:this.props.CloseFunction}}
                data={{minimize:null, close:this.props.closeData}}
                id = "spiff-submit-form"
            >
                <CardContent>
                    {this.GetForm()}
                </CardContent>
                <CardContent id="spiff-form-submit-row">
                    <TextButton 
                        text = "Submit Spiff"
                        id="submit-spiff-form"
                        ClickFunction={this.SubmitForm}
                    />
                    {this.state.formIncomplete&&<BasicHeader text = "Complete all form items to submit!" headerClass="paid-warn-text"/>}
                </CardContent>
            </Card>
        );
    }
}