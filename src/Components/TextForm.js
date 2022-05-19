import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    //States
    const[text,setText]=useState('');
    //Function Mehod
    const handleUpClick =()=>{
        //console.log("This is uppercase clicked "+text);
        setText(text.toUpperCase())
        props.showAlert('Converted to Uppercase', 'info');
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard', 'info');
    }
    const handleExtraSpaces = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim() 
        setText(newText);
        props.showAlert('Removed extra spaces', 'info');
    }

    const handleLowerClick=()=>{
        setText(text.toLocaleLowerCase());
        props.showAlert('Converted to Lowercase', 'info');
    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text has been cleared",'danger');
    }
    const handleOnChange =(event)=>{
        //console.log("On change");
        //Event to set the Value 
        setText(event.target.value)
    }     
    //text="new text";   // Wrong way to change the state
    //setText("new text"); // Correct way to change the state
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" 
                onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
                rows="7" value={text} placeholder={text} ></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="constainer my-3">
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008* text?.trim().split(/\s+/).filter((e)=>e.length!=0).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text?.trim().length>0?text:"Enter something text to preview it here"}</p>
        </div>
        </div>
        </>
    )
}

TextForm.prototype =
{
    heading: PropTypes.string.isRequired    
}

TextForm.defaultProps =
{
    heading: 'Enter you text here to analyse'
}