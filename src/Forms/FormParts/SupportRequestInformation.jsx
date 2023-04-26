import React, { Component } from 'react';
import { InputForm } from 'vhp-component-library';

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