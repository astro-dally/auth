import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const[email,setEmail] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("auth") || '{}');
    if (!data.email){
      navigate('/')
    }else{
      setEmail(data.email)
    }
    
    // if (data.email !== undefined) {
    //   window.location.href = "/homepage";
    // }

    // console.log(data)
  },[])
  return <h1> Welcome {email}</h1>;
};

export default Home;
