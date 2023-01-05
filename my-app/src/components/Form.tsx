import React,{useState} from "react";
import Image from '../images/arrowdown.png';
type Values = {
    firstName : string,
    secondName : string,
}

interface Props { 
    updateName: (firstName: string |"", secondName : string |"", ) => void;
  }

const Form = ({ updateName}: Props) => {

const [values,setValues] = useState<Values>({
    firstName : "",
    secondName : "",
    });

const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
}

const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateName(values.firstName,values.secondName );
        values.firstName = "";
        values.secondName = "";
}

return (
<div className="form">
<div className="title">
<h2>Please change your name here</h2><img src={Image}/>
</div>
<form onSubmit={(e) => handleSubmit(e)}>
  <input type="text" id="fname" name={"firstName"} onChange={handleChange} value={values.firstName}  placeholder="First name"></input><br/>

  <input type="text" id="lname" name={"secondName"} onChange={handleChange} value={values.secondName} placeholder="Second name"></input><br/>
  <input className="btn"type="submit" value="Submit"/>
</form>
</div>
);
}

export default Form;