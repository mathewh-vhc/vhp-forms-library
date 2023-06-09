import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';
/**
 * The CustomerInformation form component provides a basic template for filling out basic customer information, with the option of including contact and address information.
 * @argument {Function} SetProperty | the function called by each property, giving the key as a parameter
 * @argument {Boolean} ContactInformation | determines whether to provide the contact information fields
 * @argument {Boolean} AddressInformation | determines whether to provide the address information fields
 * @argument {String} customerName | the initial value of the customer name field.
 * @argument {String} date | the initial value of the date field, using HTML input type *date*.
 * @argument {String} phone | the initial value of the phone number field, located in the ContactInformation section.
 * @argument {String} email | the initial value of the email field, located in the ContactInformation section.
 * @argument {String} address | the initial value of the address field, located in the AddressInformation section.
 * @argument {String} city | the initial value of the city field, located in the AddressInformation section.
 * @argument {String}zip | the initial value of the zip code field, located in the AddressInformation section.
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
							formItemClass:this.props.formClasses.customerName||"info-form"
						},
						{
							title:"Date:",
							value:this.props.date,
							ChangeFunction:this.props.SetProperty,
							data:"date",
							inputType:"TextInput",
							id:"form-date",
							type:"date",
							formItemClass:this.props.formClasses.date||"info-form"
						}
					]}
				/>
				{this.props.ContactInformation&&<InputForm 
					formdata = {[
						{
							title:"Phone:",
							value:this.props.phone,
							ChangeFunction:this.props.SetProperty,
							data:"phone",
							inputType:"TextInput",
							id:"form-phone",
							formItemClass:this.props.formClasses.phone||"info-form"
						},
						{
							title:"Email:",
							value:this.props.email,
							ChangeFunction:this.props.SetProperty,
							data:"email",
							inputType:"TextInput",
							id:"form-email",
							formItemClass:this.props.formClasses.email||"info-form"
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
							formItemClass:this.props.formClasses.address||"info-form"
						},
						{
							title:"City:",
							value:this.props.city,
							ChangeFunction:this.props.SetProperty,
							data:"city",
							inputType:"TextInput",
							id:"form-city",
							formItemClass:this.props.formClasses.city||"info-form"
						},
						{
							title:"Zip:",
							value:this.props.zip,
							ChangeFunction:this.props.SetProperty,
							data:"zip",
							inputType:"TextInput",
							id:"form-zip",
							type:"number",
							formItemClass:this.props.formClasses.zip||"info-form"
						}
					]}
				/>}
			</>
            
        );
    }
}