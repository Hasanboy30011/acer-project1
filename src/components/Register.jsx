import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorMsg,setErrorMsg] = useState("")
    const navigate = useNavigate()

async function register() {
    try {
        await axios.post('http://localhost:5000/auth/register',{
      username:email,
      password,
        })
        .then(result=>{
            if(result.status){
navigate("/login")
            }
        })
    } catch (error) {
        setErrorMsg(error.response.data.message);
    }
}


    const onRegister=()=>{
register()
    }
  return (
    <>
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
        <Heading textAlign={"center"} mb={1}>Register</Heading>
        <Input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
        <Input onChange={(e)=>setPassword(e.target.value)} placeholder='password' my={"10px"}/>
        <Text as={"b"} color={"red"}>{errorMsg}</Text>
        <Button onClick={onRegister} variant={"outline"}  colorScheme='green' w={"100%"}>Register</Button>
   <Link to={"/login"}>Login</Link>
    </Box>
    </Container>
    </>
  )
}

export default Register