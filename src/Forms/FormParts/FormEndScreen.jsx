import React, { Component } from 'react';
import { FloatContainer, Card, CardContent, ActionRow } from 'vhp-component-library';

/**
 * A form piece which allows a user to submit another form.
 * @param {Function} BackFunction | external function called by Form Container
 */
export class FormEndScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
			<FloatContainer containerClass = "overlay">
				<Card cardClass = "outline-card-minimal">
					<CardContent>
						<div className='form-end-text'>
							Your form has been successfully submitted. A copy of the form has been emailed to the email you provided.
							You may submit another form or close this tab.
						</div>
					</CardContent>
					<ActionRow 
						actionRowClass = "center"
						data = {[
							{
								text:"Submit Another",
								ClickFunction:this.props.BackFunction
							}
						]}
					/>
				</Card>
			</FloatContainer>
        );
    }
}