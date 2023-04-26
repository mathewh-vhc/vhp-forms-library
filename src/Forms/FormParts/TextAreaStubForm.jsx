import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library'

/**
 * The TextAreaStub form component provides a basically template for creating subject/body forms, where the first part of the
 * form is a TextInput and the second part is a TextArea.
 * @param {Function} ChangeFunction | the ChangeFunction assigned to each form item
 * @param {String} subjectLine | the title of the subject text input
 * @param {*} subject | the property associated in the parent components state for subject
 * @param {String} subjectKey | the property name associated with the subject property
 * @param {String} bodyLine | the title of the body text area
 * @param {*} body | the property associated in the parent components state for body
 * @param {String} bodyKey | the property name associated with the body property
 */
export class TextAreaStubForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
			<InputForm 
				formdata = {[
					{
						title:this.props.subjectLine,
						inputType:"TextInput",
						value:this.props.subject,
						data:this.props.subjectKey,
						ChangeFunction:this.props.ChangeFunction
					},
					{
						title:this.props.bodyLine,
						inputType:"TextArea",
						value:this.props.body,
						data:this.props.bodyKey,
						ChangeFunction:this.props.ChangeFunction
					}
				]}
			/>
        );
    }
}