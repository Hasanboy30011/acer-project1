import { Container,Box,Button, Text, Center, Heading, Grid, GridItem, Card, CardBody,Stack,CardFooter,Image } from '@chakra-ui/react'
import acsessuars1 from "../assets/images/acsessuars1.png"
import acsessuars2 from "../assets/images/acsessuars2.png"
import acsessuars3 from "../assets/images/acsessuars3.png"
import acsessuars4 from "../assets/images/acsessuars4.png"
import acsessuars5 from "../assets/images/acsessuars5.png"
import acsessuars6 from "../assets/images/acsessuars6.png"
import acsessuars7 from "../assets/images/acsessuars7.png"
import React from 'react'

 const Aksessuars = () => {
  return (
    <Container maxW={1280} p={"20px"}>
<Box
      h={400}
      bgImage={acsessuars6} 
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      p={4} 
      boxShadow="md" 
      position="relative" 
    ><Center h={200}>
      <Box color={"white"}>
      <Heading color={"white"}>Аксессуары</Heading>
      <Text>Мыши, клавиатуры и др. — ознакомьтесь со всеми</Text>
      <Text>новейшими периферийными устройствами,</Text>
      <Text>которые предлагает Acer.</Text>
      </Box>
      </Center>
     
    </Box>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>

<GridItem >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars5}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Гарнитуры</Heading>
 
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>
<GridItem >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars4}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Мыши</Heading>
    
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>
<GridItem  >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars3}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Коврики для мыши</Heading>
  
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>
<GridItem >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars2}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Аксессуары для проекторов</Heading>
    <Text>
    Отлично подходят для ситуаций, когда требуется расширить возможности проектора. Например, беспроводная система для презентаций, аппаратные ключи и многое другое.
    </Text>
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>

<GridItem >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars1}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>Чехлы</Heading>
    
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>
<GridItem >
<Card maxW='sm'>
<CardBody>
  <Image
    src={acsessuars7}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>«Works With  Chromebook»</Heading>
    <Text>
    Эти аксессуары с сертификацией «Works With Chromebook» эффективно работают с вашим устройством Chromebook.o
    </Text>
  </Stack>
</CardBody>
<CardFooter>
 <Button colorScheme='green' width={"100%"}>More Details</Button>
</CardFooter>
</Card>
</GridItem>

</Grid>

    </Container>
  )
}
export default Aksessuars