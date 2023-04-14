import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';
/**
 * A form which provides fields for submitting customer information.
 * @param {Function} SetProperty | the function called by each property, giving the key as a parameter
 * @param {Boolean} ContactInformation | determines whether to provide the contact information fields
 * @param {Boolean} AddressInformation | determines whether to provide the address information fields
 */
export class CustomerInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
			<>
				<InputForm 
					formdata = {[
						{
							title:"Customer Name:",
							value:this.props.customerName,
							ChangeFunction:this.props.SetProperty,
							data:"customerName",
							inputType:"TextInput",
							id:"customer-name",
							formItemClass:"info-form"
						},
						{
							title:"Date:",
							value:this.props.date,
							ChangeFunction:this.props.SetProperty,
							data:"date",
							inputType:"TextInput",
							id:"form-date",
							type:"date",
							formItemClass:"info-form"
						}
					]}
				/>
				{this.props.ContactInformation&&<InputForm 
					formdata = {[
						{
							title:"Phone:",
							value:this.props.address,
							ChangeFunction:this.props.SetProperty,
							data:"phone",
							inputType:"TextInput",
							id:"form-phone",
							formItemClass:"info-form"
						},
						{
							title:"Email:",
							value:this.props.email,
							ChangeFunction:this.props.SetProperty,
							data:"email",
							inputType:"TextInput",
							id:"form-email",
							formItemClass:"info-form"
						}
					]}
				/>}
				{this.props.AddressInformation&&<InputForm 
					formdata = {[
						{
							title:"Address:",
							value:this.props.address,
							ChangeFunction:this.props.SetProperty,
							data:"address",
							inputType:"TextInput",
							id:"form-address",
							formItemClass:"info-form"
						},
						{
							title:"City:",
							value:this.props.city,
							ChangeFunction:this.props.SetProperty,
							data:"city",
							inputType:"TextInput",
							id:"form-city",
							formItemClass:"info-form"
						},
						{
							title:"Zip:",
							value:this.props.zip,
							ChangeFunction:this.props.SetProperty,
							data:"zip",
							inputType:"TextInput",
							id:"form-zip",
							type:"number",
							formItemClass:"info-form"
						}
					]}
				/>}
			</>
            
        );
    }
}