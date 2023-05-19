import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

/**
 * The TechnicianInformation form is a simple form stub which contains fields for filling out technician information on a customer facing form.
 * @param {Function} SetProperty | the ChangeFunction assigned to each form item, triggered on input of a form item.
 * @param {String} technician | the initial value of the form Technician field
 */
export class TechnicianInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <InputForm 
				formdata = {[
					{
						title:"Technician Name:",
						value:this.props.technician,
						ChangeFunction:this.props.SetProperty,
						data:"technician",
						inputType:"TextInput",
						id:"technician-name",
						formItemClass:"info-form"
					}
				]}
			/>
        );
    }
}