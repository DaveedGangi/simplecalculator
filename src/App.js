import React, {useState} from "react";
import {evaluate} from "mathjs"
import './App.css';

function App() {
const [result,updateResult]=useState("");
const [error,updateError]=useState("");

const updateData=(event)=>{
   const {value,type} =event.target;
   if(type==="text"){
    updateResult(value);
   }
   else{
    updateResult((previousResult)=>previousResult+value);
   }

    updateError("");
   
}

const finalResult=()=>{
  try{
      updateResult(evaluate(result));
      updateError("");
  }
  catch(error){
    console.log("Error in finalResult",error);
    
    updateError("Error in evaluation");
  }
}

  return (
    <div className="home">
      <div className="container">
        <h1>Simple Calculator</h1>
     <input type="text" value={result} onChange={updateData}/>
    
       <br/>
       {error&&<h4 className="errorMessage">{error}</h4>}
       <br/>
       
      <button type="button" value="1" onClick={updateData}>1  </button>
      <button type="button" value="2" onClick={updateData}>2  </button>
      <button type="button" value="3" onClick={updateData}>3  </button>
      <button type="button" value="4" onClick={updateData}>4  </button>
      <button type="button" value="5" onClick={updateData}>5  </button>
      
      <button type="button" value="6" onClick={updateData}>6  </button>
      <button type="button" value="7" onClick={updateData}>7  </button>
      <button type="button" value="8" onClick={updateData}>8  </button>
      <button type="button" value="9" onClick={updateData}>9  </button>
      <button type="button" value="0" onClick={updateData}>0  </button>
      
      <button type="button" value="+" onClick={updateData}>+   </button>
      <button type="button" value="-" onClick={updateData}>-   </button>
      <button type="button" value="*" onClick={updateData}>*   </button>
      <button type="button" value="/" onClick={updateData}>/   </button>
      
      <button type="button" value="=" onClick={finalResult}>=  </button>
      <button type="button" onClick={()=>{updateResult(""); updateError("");}}>Clear</button>

      </div>
    </div>
  );
}

export default App;
