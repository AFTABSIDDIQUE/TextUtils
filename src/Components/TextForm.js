import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        console.log("UpperCase was Clicked");
        setText(newText);
        props.showAlert('UpperCase Coverted','success');
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        console.log("LowerCase was Clicked");
        setText(newText);
        props.showAlert('LowerCase Coverted','success');
    }
    const handleRemoveSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Removed the spaces','success');
    }
    const handleCopy =()=>{
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Text has been Copied','success');
    }
    const handleClear =()=>{
        setText('');
        props.showAlert('Clear the textbox','success');
    }
    
    const handleOnClick =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    
    const[text,setText] = useState('');
  return (
    <>
       <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
            <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  rows="8" placeholder='Enter the Text in TextBox' value={text} onChange={handleOnClick} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        </div>
        <div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters </p>   
            <p>{0.008*text.split(" ").length} Minutes to Read a Word </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Please Enter the text into the above textarea to see the text'}</p>        
        </div>       
    </>
  )
}
