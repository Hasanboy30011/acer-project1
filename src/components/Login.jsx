import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext"

const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg,setErrorMsg] = useState("")
  const navigate = useNavigate()


async function login(){
    try {
        await axios.post('http://localhost:5000/auth/login',{
username:email,
password,
        }).then(result=>
        {
            if(result.status === 200){
                localStorage.setItem('token',JSON.stringify(result.data.token))
                navigate('/')
            }
        }) 
    } catch (error) {
       setErrorMsg(error.response.data.message);
    }
}






    const onLogin =()=>{
        login()
    }
  return (
    <Container 
    maxW={"1300px"}
    mx={"auto"}
    display={"flex"}
    justifyContent={"center"}>
    <Box
     w={"500px"} 
     
    display={"flex"} 
    flexDirection={"column"} 
    alignItems={"center"}
    >
        <Heading textAlign={"center"} mb={1}>Login</Heading>
        <Input onChange={(e=>setEmail(e.target.value))} placeholder='email'/>
        <Input onChange={(e=>setPassword(e.target.value))} placeholder='password' my={"10px"}/>
        <Text as={"b"} color={"red"}>{errorMsg}</Text>
        <Button onClick={onLogin} colorScheme='green' w={"100%"}>login</Button>
        <Link to={"/register"}>Register</Link>
    </Box>
    </Container>
  )
}

export default Login