import React from 'react'

const TextareaPage = (props) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            {props.LabelFor}
            </label>
            <textarea
            className="form-control"
            
            rows="2"
            />
        </div>
    )
}

export default TextareaPage;