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
    const handleExtraSpace = ()=>{
        let newText=text.replace(/\s+/g,' ');
        setText(newText);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText]= useState('');
    return (
        <>
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3" style={{color:props.mode==='dark'?'grey':'white'}}>
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey ':'white' , color:props.mode==='light'?'black':'white'}} value={text} id="box" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUp}>Convert to Upper</button>
            <button className='btn btn-primary mx-1' onClick={handleLo}>Convert to Lower</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra spaces</button>

            <div style={{color:props.mode==='dark'?'white':'black'}} className="container my-5" c>
                <h1 >Your Text summary</h1>
                    <p > {text.split(" ").length-1} words and {text.length} character int your text </p>
                    <p > {0.008*text.split(" ").length} minutes time for reading</p>
                    <h1 >Preveiw</h1>
                    <p >{text.length>0?text:"Enter something above text area for preview"}</p>
            </div>

        </>
    );
}export default TextForm;

