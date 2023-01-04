import React,{useState} from "react";

type Values = {
    firstName : string,
    secondName : string,
}


const Form = () => {

const [values,setValues] = useState<Values>({
    firstName : "",
    secondName : "",
    });

return (
<div className="form">
    
<form>
  <label >First name:<br/>
  <input type="text" id="fname" name={"firstName"}></input><br/>
  </label>
  
  <label>Last name:<br/>
  <input type="text" id="lname" name={"secondName"}></input><br/>
  </label>
</form>
</div>
);
}

export default Form;