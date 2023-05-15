/*
@Author Shaswat Sharma
*/
import React, {useState} from 'react';
import './App.css';

//Main functional component of application
function App(){

  //initliazing hook states for user input Data, Result, and Form Submit
  const [isSubmitted, setSubmit] = useState(false)
  const [Data, setData] = useState('')
  const [Result, setResult] = useState(0)
  
  /*
  This function is to handle the change for the user input number/text field
  The data hook/state is set to the value of this input number 
  */
  const handleChange = (e) =>{
    e.preventDefault()
    var number = parseInt(e.target.value)
    setData(number)
  }
  /*
  This function is to handle the submission of the input form 
  */
  const handleSubmit = async (e) =>{
    e.preventDefault()
 
    // Prompt will alert user that there are no prime numbers less than 2 if input selected is less than 3
    if(Data<3){
      alert('There are no prime numbers less than 2, please enter a number above 2')
      setSubmit(false)
      return 
    }
    setSubmit(true)
    /* 
    Utilizing POST from fetch, to send user input through route to Backend
    User Input sent through body of JSON utilizing Data state/hook, result is stored in Result state/hook
    */
   try{
     fetch("/api", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "Number": Data })
    }).then((response) => response.json()).then((result) => {
      console.log(result)
      setResult(result)
    }) 
    }catch (error){
      console.log('Error encountered: ', error)
  }
  }

  /*Main render of Application including a user input form, and conditional render utilizing State to render result
    Condition for hook state Result and isSubmitted identify if the form has been submitted and if a result has been sent back from the backend
  */
  return(
    <div className = "container">
      <p>*Finds the median prime number(s) of the set of prime numbers less than the entered number </p>
      <h1> Enter a Number</h1>
      <form onSubmit= {handleSubmit}> 
          <input class = "inputbox" type="number" required  onChange = {handleChange}></input>
          <button class="button" type = "submit" > Find</button>
      </form>
      <div> 
        {(typeof Result.result !== 'undefined' && isSubmitted) &&
            <h1> Median is: {JSON.stringify(Result.result)}</h1>
        }
      </div>
    </div>
  )
}

export default App