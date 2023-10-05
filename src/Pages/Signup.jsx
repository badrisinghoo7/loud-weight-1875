import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/Authentication/action";
import { Link, Navigate} from "react-router-dom";
import styled from "styled-components";

const initialState={
  email:"",
  password:"",
  name:""
}

function Signup() {

  const dispatch = useDispatch();
  const [userData, setUserData] = useState(initialState);
  const [gotoLogin, setGotoLogin]=useState(false)

  const handleSignup = (e) => {
    e.preventDefault();
    if(userData.email && userData.password&& userData.name)
    {
      let user = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
      };
      dispatch(signup(user)).then(res=>{
        setGotoLogin(true)
      })
    }else{
      alert("Please fill All Sections");
    }
   
  };
  if(gotoLogin)
  {
    return <Navigate  to="/login"/>
  }
  const {email,password,name}=userData;
  return (
    <DIV>
        <div className="box">
          <h1> Signup</h1>
          <form className="formData">
            <input
              type="text"
              placeholder="Enter username"
              name="name"
              value={name}
              onChange={e=> setUserData({...userData, name:e.target.value})}
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e=> setUserData({...userData, email:e.target.value})}
            />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={e=> setUserData({...userData, password:e.target.value})}
            />
            <button type="submit" onClick={handleSignup}>Submit</button>
            <p>Already have an account <Link to="/login"><span style={{color:"red"}}>Register</span></Link></p>
          </form>
          
        </div>
    </DIV>
  );
}

export default Signup;

const DIV = styled.div`
    width: 100%;
    .box{
      width: 400px;
      margin: auto;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
      padding: 20px 30px;
      border-radius: 10px;
      margin-top: 50px;
    }

    .formData{
      display: flex;
      flex-direction:column;
      gap: 20px;
    }
    h1{
      font-size: 30px;
      color:red;
      margin-bottom:20px
    }
    input {
       padding: 8px;
       border-radius: 5px;
       border: 1px solid grey;
    }
    button{
      padding: 5px;
      border-radius: 10px;
      background-color:  #47bd47;;
      color: aliceblue;
      font-size: 20px;
    }
`