import React,{useState} from "react";

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

<form onSubmit={(e) => handleSubmit(e)}>
  <label >First name: <input type="text" id="fname" name={"firstName"} onChange={handleChange} value={values.firstName}></input><br/>
  </label>
  
  <label>Second name: <input type="text" id="lname" name={"secondName"} onChange={handleChange} value={values.secondName}></input><br/>
  </label>
  <input type="submit" value="Submit"/>
</form>
</div>
);
}

export default Form;