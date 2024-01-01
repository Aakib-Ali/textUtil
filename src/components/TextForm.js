import React,{useState} from 'react'
function TextForm(props){
    const handleUp = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLo = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        let newText='';
        setText(newText);
    }
    const handleSpace = ()=>{
        let newText=text.split(" ").join("");
        setText(newText);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText]= useState('');
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} placeholder='Enter your Text for conversion' value={text} id="box" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUp}>Convert to Upper</button>
            <button className='btn btn-primary mx-1' onClick={handleLo}>Convert to Lower</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleSpace}>Remove spaces</button>

            <div className="container my-5">
                <h1>Your Text summary</h1>
                    <p> {text.split(" ").length} words and {text.length} character int your text </p>
                    <p> {0.008*text.split(" ").length} minutes time for reading</p>
                    <h1>Preveiw</h1>
                    <p>{text}</p>
            </div>

        </>
    );
}export default TextForm;

