// SurveyNew shows SurveyForm and SurveyReview

import React, { Component } from 'react';

import SurveyForm from './SurveyForm';

import SurveyReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showSurveyReview:false }

    //helper method to render based on state
    renderContent() {
        if (this.state.showSurveyReview===true){
            return <SurveyReview />
        };
        return(
            <SurveyForm 
            onSurveySubmit = { () => this.setState({showSurveyReview:true})}/>
        )
    };
    render() { 
        return (
            <div>
                {this.renderContent()}
            </div>
          );
    }
}
 
export default SurveyNew;