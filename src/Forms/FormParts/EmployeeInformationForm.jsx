import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

/**
 * The EmployeeInformation form component provides a basic template for filling out basic employee information.
 * @argument {Function} ChangeFunction | the ChangeFunction assigned to each form item, triggered on input of a form item.
 * @argument {String} user | the initial value of the user field.
 * @argument {String} first | the initial value of the first name field.
 * @argument {String} last | the initial value of the last name field.
 * @argument {String} phone | the initial value of the phone number field.
 * @argument {String} email | the initial value of the email field.
 * @argument {Object} formReqs | optional table containing the formReqs for requiring input to be filled.
 */
export class EmployeeInformation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<InputForm 
				formdata = {[
					{
						title:"Username",
						value:this.props.user,
						inputType:"TextInput",
						data:"user",
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs.user
					},
					{
						title:"First Name",
						value:this.props.first,
						inputType:"TextInput",
						data:"first",
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs.first
					},
					{
						title:"Last Name",
						value:this.props.last,
						inputType:"TextInput",
						data:"last",
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs.last
					},
					{
						title:"Phone",
						value:this.props.phone,
						inputType:"TextInput",
						data:"phone",
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs.phone
					},
					{
						title:"Email",
						value:this.props.email,
						inputType:"TextInput",
						data:"email",
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs.email
					}
				]}
			/>
		);
	}
}