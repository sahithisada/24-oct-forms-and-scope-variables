import React, { useRef } from 'react'

function HighSchool() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();

    let telInputRef = useRef();
    let hinInputRef = useRef();
    let engInputRef = useRef();
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();

    let resultLabelRef = useRef();

  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef}></input>
        </div>

        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}></input>
        </div>

        <div>
            <label>Telugu</label>
            <input type="number" ref={telInputRef}></input>
        </div>

        <div>
            <label>Hindi</label>
            <input type="number" ref={hinInputRef}></input>
        </div>

        <div>
            <label>English</label>
            <input type="number" ref={engInputRef}></input>
        </div>

        <div>
            <label>Maths</label>
            <input type="number" ref={mathInputRef}></input>
        </div>

        <div>
            <label>Science</label>
            <input type="number" ref={sciInputRef}></input>
        </div>

        <div>
            <label>Social</label>
            <input type="number" ref={socInputRef}></input>
        </div>
      
        <div>
            <button type='button' onClick={()=>{

                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let engMarks = Number(engInputRef.current.value);
                let mathMarks = Number(mathInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);

                let totalMarks= telMarks+hinMarks+engMarks+mathMarks+sciMarks+socMarks;
                
                alert(`${firstName} ${lastName}, Total Marks are ${totalMarks}`);
               resultLabelRef.current.innerHTML = `${firstName} ${lastName} your Total Marks are ${totalMarks}`;

            }}>Calculate Result</button>
        </div>
        <label className='innerLabel' ref={resultLabelRef}>please enter your marks to calculate your result</label>
      </form>
    </div>
  )
}

export default HighSchool
