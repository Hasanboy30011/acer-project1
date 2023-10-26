import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { Box, Button, Center, Container } from '@chakra-ui/react'

const Auth = () => {
  
  const [variant,setVariamt] = useState("login")

  const changeVariant =()=>{
    if(variant === "login"){
      setVariamt("register")

    }
    else{
      setVariamt('login')
    }
  }
  return (
    <>
    <Center>
    <Container maxW={1300} mx={"auto"} w={"100%"} >
      <Box border={"1px solid gray"} p={20} borderRadius={8} width={500}>
      
      {variant === "login" ? <Login/> : <Register/> }
      <Button variant={"link"} onClick={changeVariant}>{variant === 'login' ? "Register" : "Login"}</Button>
      </Box>
      </Container>
      </Center>
    </>
  )
}

export default Auth