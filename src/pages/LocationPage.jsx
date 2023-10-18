import { Box, Button, Center, Container, Heading, Input } from '@chakra-ui/react'
import React from 'react'

 const LocationPage = () => {
  return (
    <>
    <Container maxW={1280} p={"20px"}>
<Center>
    <Button borderBottom={"1px solid gray"} width={"100%"} variant={"link"}>Где купить</Button>
    
</Center>
<br /><br />
<Center>
    <Heading>Где купить</Heading>
</Center>
<Center>
    <Box display={"flex"}> 
    <Input placeholder='Введите адрес, город или почтовый индекс.'/>
    <Button colorScheme='green'>Поиск</Button>
    </Box>
</Center>
    </Container>
    </>
  )
}
export default LocationPage