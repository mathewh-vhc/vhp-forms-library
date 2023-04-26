import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

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