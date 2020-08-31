// SurveyFormReview shows user their filed entries prior to submitting

import React from 'react';
import { connect } from 'react-redux';

const SurveyReview = (props) => {
    return(
        <div>
            <h5>Confirm your entries</h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{props.formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{props.formValues.subject}</div>
                </div>
                <div>
                    <label>Body</label>
                    <div>{props.formValues.body}</div>
                </div>
                <div>
                    <label>Emails</label>
                    <div>{props.formValues.emails}</div>
                </div>
            </div>
            <button
                className="yellow darken-3 btn-flat"
                onClick={ props.onCancel}>
                    Cancel
            </button>
        </div>
    )
}

// function to pull props from redux store
function mapStateToProps (state) {
    return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps)(SurveyReview);