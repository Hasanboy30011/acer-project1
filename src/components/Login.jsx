import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
const [errorMsg,setErrorMsg] = useState("")
const navigate = useNavigate()
const toast = useToast()
async function login(){
  try {
    await axios.post("http://localhost:5000/auth/login",{
      username:email,
      password,
    }).then(result=> {
      if(result.status === 200){
localStorage.setItem("token",JSON.stringify(result.data.token))
navigate("/")

      }
    }
      )
    
  } catch (error) {
    setErrorMsg(error.response.data.message);
  }
  } 

const onLogin=()=>{
  if(email.length>3 && password.length>3){
    
login()}
else{
  setErrorMsg("please fill on input")
}
}
  return (
    
     <Container maxW={1300} mx={"auto"} display={"flex"} justifyContent={"center"}> 
    <Box w={"500px"}>
      <Heading textAlign={"center"} size={"md"} mb={3}>Login</Heading>
      <Input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
      <Input onChange={(e)=>setPassword(e.target.value)} my={10} placeholder='password'/>
      <Text as={"b"} color={"red"}>{errorMsg}</Text>
      <Button width={"100% "} colorScheme='green' onClick={onLogin} >Login</Button>
    </Box>
    <Link to={"/register"}>Register</Link>
    </Container>
 
    
  )
}

export default Login