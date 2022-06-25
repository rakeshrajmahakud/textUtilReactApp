import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }

    const handleClearText = ()=>{
        setText("");
    }

    const handleCopyText= ()=>{
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const [text,setText] = useState('');    // always write this line inside function component (this is react hook )
    // setText('This is how we change the text');
    
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}} > 
                <h2>{props.heading}</h2>      
                <div className="mb-3">
                    {/* <label htmlFor="mybox" className="form-label"></label> */}
                    <textarea className="form-control" value={text}  style={{backgroundColor : props.mode === 'dark' ? '#341c3d' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Capital</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Small</button>
                <button className="btn btn-primary" onClick={handleClearText}>Clear all</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyText}>Copy text</button>
                <button className="btn btn-primary" onClick={handleExtraSpace}>Remove Extra space</button>
            </div>
            <div className='container my-3' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summery</h2>
                <p> {text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes read </p>
            </div>
        </>
    ) 
}
 