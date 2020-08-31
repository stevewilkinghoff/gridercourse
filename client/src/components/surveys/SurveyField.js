// SurveyField contains logic to render a single text field and its input

import React from 'react';




export default (props, meta) => {
    return(
        <div>
            <label> { props.label } </label>
            <input {...props.input} style={{marginBottom:"5px"}}/>
            <div className="red-text" style={{marginBottom:'20px'}}>
            {props.meta.touched && props.meta.error}
            </div>
        </div>
    ) 
};