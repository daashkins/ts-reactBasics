import React,{useState, useEffect} from "react";
import Form from './Form';
import axios, {AxiosResponse} from 'axios';

type Values = {
    firstName : string,
    secondName : string,
}

const Main = () => {

const [firstName,setFirstName] = useState<string>("");
const [secondName,setSecondName] = useState<string>("");
const [age,setAge] = useState<number | "">("");

const getData = async () => {
        const response = await axios.get(`https://randomuser.me/api/`);
        console.log(response.data.results[0]);
        setFirstName(response.data.results[0].name.first);
        setSecondName(response.data.results[0].name.last);
        setAge(response.data.results[0].registered.age);
};

useEffect(() => {
    getData()
},[])

return (
<div className="main">
<Form></Form>

<h2>User</h2>
<p>First name: {firstName}</p>
<p>Second name: {secondName}</p>
<p>Age: {age}</p>
</div>
);
}

export default Main;