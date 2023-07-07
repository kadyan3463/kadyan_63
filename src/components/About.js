import React from 'react'

export default function About(props) {

    let myStyle={
        color:props.mode === 'dark'?'white':'grey',
        backgroundColor:props.mode==='dark'?'grey':'white'
    }
  /* const [myStyle, setMyStyle] = useState({
        color: 'grey',
        backgroundColor: 'white',
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")

   const toggleStyle = () => {
        if (myStyle.color === 'grey') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'grey',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");

        }
        else {
            setMyStyle({
                color: 'grey',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }*/

    return (

        <div className="container" >
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>  TextUtiles gives you a way to analyze your text quickly and efficiently . Be it word count , character count or</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>    Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong> TextUtils is a free character counter tool that provide instant character count and word count statistics for a given text .
                            TextUtiles  report Mein number report the number of words  and characters. Thus , it is suitable for writing text with word / character limit.</strong>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong> This word counter software work in any web browser such as crome, Firefox, Internet,  Explorer, Safari,  Opera. It suits to count character in Facebook, blog, books,  Excel document PDF document, essays, etc.</strong>

                        </div>
                    </div>
                </div>
            </div>
           { /*div className="mode my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-dark" >{btntext}</button>
    </div>*/}

        </div>
    )
}
