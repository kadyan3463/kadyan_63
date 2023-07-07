import React, { useState } from 'react'

export default function TextForm(props) {


  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPER CASE .","success");
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case .","success");
  }
  
  const handleToogleClick = () => {
    const newText = text.split('').map((char) => {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    }).join('');
    setText(newText);
    props.showAlert("Converted to tOOGLE cASE  .","success");
  }

  const handleSentenceClick = () => {
    const sentenceCaseResult = text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase();
  setText(sentenceCaseResult);
  props.showAlert("Converted to Sentence Case .","success");
  }

  const handleCapitalClick = () => {
    const words = text.toLowerCase().split(' ');
    const capitalCaseWords = words.map((word) => {
      if (word.length === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    });
    const newText = capitalCaseWords.join(' ');
    setText(newText);
    props.showAlert("Converted to Capitalize case .","success");
  }

  const handleAlternateClick = () => {
    const newText = text.split('').map((char, index) => {
      return index % 2 === 0
        ? char.toUpperCase()
        : char.toLowerCase();
    })
    .join('');
  setText(newText);
  props.showAlert("Converted to aLtErNaTe cAsE .","success");
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Extra Space Removed !","success");
  }
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard .","success");
  }
  const handleClearClick = () => {
    console.log("Clear case  Clicked ! ." + text);
    let newText = " ";
    setText(newText)
    props.showAlert("Text Cleared ! .","success");
  }

  const [text, setText] = useState(''); 

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':''}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#272727':'white', color:props.mode==='dark'?'white':'black'}}  id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleDownClick}>Convert to lowecase</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleToogleClick}>tOOGLE cASE</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleSentenceClick}>Sentence case</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCapitalClick}>Capitalize Case</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleAlternateClick}>aLtErNaTe cAsE</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleExtraSpace}>Remove Extra space</button>
      <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-info my-2 mx-2" onClick={handleClearClick}>Clear TextArea</button>
    </div>
    <div className="conatiner my-1" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary .</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Time to read in Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview !"}</p>
    </div>
    </>
  )
} 
