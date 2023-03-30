import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

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