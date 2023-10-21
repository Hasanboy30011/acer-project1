import React, { useState } from 'react'
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
const [errorMsg,setErrorMsg] = useState("")
const navigate = useNavigate()
async function register(){
try {
  await axios.post("http://localhost:5000/auth/register",{
    username:email,
    password,
  }).then(result=> {
    if(result.status === 200) {
      navigate("/login")
    }
  })
} catch (error) {
  setErrorMsg(error.response.data.message)
}
} 

  const onRegister =()=>{
register()
  }
  return (
    <Container maxW={1300} mx={"auto"} display={"flex"} justifyContent={"center"}>
    <Box width={"500px"}>
    <Heading textAlign={"center"} size={"md"} mb={3}>Register</Heading>
    <Input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
    <Input onChange={(e)=>setPassword(e.target.value)} my={10} placeholder='password'/>
      
    <Button width={"100% "} colorScheme='green' variant={"outline"} onClick={onRegister}>
      Register
      </Button>
     
      <Text as={"b"} color={"red"}>{errorMsg}</Text>
      <br />
      <Link to={"/login"}>Login</Link>
  </Box>
  </Container>
  )
}

export default Register