import {useState,useEffect} from 'react';
import Logo from "../components";
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name:"",
  email:"",
  password:"",
  isMember:true
}

const Register = () => {
  const [values,setValues] = useState(initialState);
  
  const handleChange = (e) =>{
    console.log(e.target);
  }

  const onSubmit = (e) => {
    console.log(e.target);
  }

  return (
    <div>Register</div>
  )
}

export default Register