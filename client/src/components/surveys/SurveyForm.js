// shows the SurveyForm component included in SurveyNew

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import reduxForm helper form redux-form library
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

class SurveyForm extends Component {
    //make helper function to render individual fields
    renderFields() {
        return(
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
            </div>
        )
    };
    state = {  }
    render() { 
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                { this.renderFields() }
                <Link to="/surveys" className="red btn-flat left white-text">Cancel
                </Link>
                    <button type="submit" className="teal btn-flat right white-text">Submit
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
          );
    }
}

function validate(values) {
    const errors = {}
    // if statement to return error if no values title provided
    if (!values.title) {
        errors.title = "You must provide a title!";
    }
    // if statement to return error if no subject provided
    if (!values.subject) {
        errors.subject = "You must provide a subject!";
    }
    // if statement to return error if no email body provided
    if (!values.body) {
        errors.body = "You must provide a body for your message!";
    }
    // if statement to return error if no email recipient provided
    if (!values.emails) {
        errors.emails = "Hey, asshole!  You need to provide some emails for your message!";
    }

    return errors;
};

// handleSubmit -above - is a reduxForm function
export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);

