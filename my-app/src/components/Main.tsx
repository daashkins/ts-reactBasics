import React,{useState, useEffect} from "react";
import Form from './Form';
import axios from 'axios';

const Main = () => {

const [firstName,setFirstName] = useState<string>("");
const [secondName,setSecondName] = useState<string>("");
const [address,setAddress] = useState<string>("");
const [age,setAge] = useState<number | "">("");

const getData = async () => {
        const response = await axios.get(`https://randomuser.me/api/`);
        const address = `${response.data.results[0].location.postcode}, ${response.data.results[0].location.country}, ${response.data.results[0].location.city}, ${response.data.results[0].location.street.name},${response.data.results[0].location.street.number} `;
        setFirstName(response.data.results[0].name.first);
        setSecondName(response.data.results[0].name.last);
        setAddress(address);
        setAge(response.data.results[0].registered.age);
};

useEffect(() => {
    getData()
},[])

const updateName = (firstName: string | "", secondName: string | ""):void => {
    setFirstName(firstName);
    setSecondName(secondName)
}

return (
<div className="main">
<h2>Your profile:</h2>
<p>First name: {firstName}</p>
<p>Second name: {secondName}</p>
<p>Address: {address}</p>
<p>Age: {age}</p>

<Form updateName={updateName}/>
</div>
);
}

export default Main;