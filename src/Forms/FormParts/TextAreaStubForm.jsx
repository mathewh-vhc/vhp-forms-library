import React, { Component } from 'react';
import { CardContent, InputForm } from 'vhp-component-library'

/**
 * The TextAreaStub form component provides a basic template for creating subject/body forms, where the first part of the form is a TextInput and the second part is a TextArea.
 * @param {Function} ChangeFunction | the ChangeFunction assigned to each form item
 * @param {String} subjectLine | the title of the subject field
 * @param {String} subject | the initial starting value of the subject TextInput field
 * @param {String} subjectKey | the property name associated with the subject property
 * @param {String} bodyLine | the title of the body field
 * @param {String} body | the initial starting value of the body TextArea field
 * @param {String} bodyKey | the property name associated with the body property in the parent container
 * @param {Object} formReqs | optional table containing the formReqs for requiring input to be filled
 */
export class TextAreaStubForm extends Component {
    constructor(props) {
        super(props)

		this.GetForm = this.GetForm.bind(this)
    }

	GetForm() {
		if (this.props.formReqs != undefined) {
			return <InputForm 
				formdata = {[
					{
						title:this.props.subjectLine,
						inputType:"TextInput",
						value:this.props.subject,
						data:this.props.subjectKey,
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs[this.props.subjectKey]||""
					},
					{
						title:this.props.bodyLine,
						inputType:"TextArea",
						value:this.props.body,
						data:this.props.bodyKey,
						ChangeFunction:this.props.ChangeFunction,
						formItemClass:this.props.formReqs[this.props.bodyKey]||""
					}
				]}
			/>
		} else {
			return <InputForm 
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
		}
	}

    render() {
        return(
			<CardContent cardContentClass = "text-area-stub-cont">
				{this.GetForm()}
			</CardContent>
        );
    }
}