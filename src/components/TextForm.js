import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  
  }

  const handleLowClick = ()=> {
    console.log("Lower case was clicked");
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  
  const handleCopy = ()=> {
    console.log("I am  copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text is copied","success");
  }
  
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" All the extra spaces are removed","success");
  }



  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);

  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    
      <h1>{props.heading}  </h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'  }} id="myBox" rows="8"></textarea>
</div>
<button  className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
<button  className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lower case</button>
<button  className="btn btn-primary mx-2" onClick={handleCopy}>To copy the text</button>
<button  className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>
    </div>
  
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    
    </>
  )
}
