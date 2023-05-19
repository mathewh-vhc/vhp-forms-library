import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

/**
 * The SupportRequestInformation form component provides a basic template for creating user support forms and directing users towards a specific support flow or in-app support process.
 * @argument {Function} ChangeFunction | the ChangeFunction assigned to each form item, triggered on input of a form item.
 * @argument {Object} department | the text,value pair which describes the default state of the department DropDown.
 * @argument {Array} departmentList | an array containing text,value pairs used in the department DropDown.
 * @argument {Object} type | the text,value pair which describes the default state of the type DropDown.
 * @argument {Array} typeList | an array containing text,value pairs used in the type DropDown.
 * @argument {Object} category |  the text,value pair which describes the default state of the category DropDown.
 * @argument {Array} categoryList | an array containing text,value pairs used in the category DropDown.
 * @argument {Object} priority | the text,value pair which describes the default state of the type DropDown. Text describes the priority while value maps to the corresponding urgency in Teams.
 * @argument {Object} priorityList | an array containing text,value pairs used in the type DropDown.
 * @argument {Boolean} showDates | determines whether to show an ask date and an expect date in the form.
 * @argument {String} askDate | the initial value which fills into the askDate field.
 * @argument {String} expectDate | the initial value which fills into the expectDate field.
 * @argument {Object} formReqs | optional table containing the formReqs for requiring input to be filled.
 */
export class SupportRequestInformation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<>
				<InputForm 
					formdata = {[
						{
							title:"What department are you requesting help from?",
							selected:this.props.department,
							inputType:"DropDown",
							list:this.props.departmentList,
							data:"department",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.department
						},
						{
							title:"What type of ticket do you wish to submit?",
							selected:this.props.type,
							inputType:"DropDown",
							list:this.props.typeList,
							data:"type",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.type
						},
						{
							title:"What category do you wish to request support?",
							selected:this.props.category,
							inputType:"DropDown",
							list:this.props.categoryList,
							data:"category",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.category
						},
						{
							title:"How urgent is the issue?",
							selected:this.props.priority,
							inputType:"DropDown",
							list:this.props.priorityList,
							data:"priority",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.priority
						}
					]}
				/>
				{this.props.showDates&&<InputForm 
					formdata = {[
						{
							title:"I would like a response by the following date.",
							value:this.props.askDate,
							inputType:"TextInput",
							type:"date",
							data:"askDate",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.askDate
						},
						{
							title:"Based on the information provided above, you can expect a response on or before the following date.",
							value:this.props.expectDate,
							inputType:"TextInput",
							type:"date",
							data:"expectDate",
							ChangeFunction:this.props.ChangeFunction,
							formItemClass:this.props.formReqs.expectDate
						}
					]}
				/>}
			</>
		);
	}
}