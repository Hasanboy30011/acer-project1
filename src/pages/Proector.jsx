import React from 'react'
import { Card, Container,Grid,GridItem,CardBody,Stack,Heading,Text,Image, CardFooter, Button,Box, Center  } from '@chakra-ui/react'
import proector1 from "../assets/images/proector1.png"
import proector2 from "../assets/images/proector2.png"
import proector3 from "../assets/images/proector3.png"
import proector4 from "../assets/images/proector4.png"

import proector5 from "../assets/images/proector5.png"
 const Proector = () => {
  return (

 
 
    <>
      <Container maxW={'1280px'} p={"20px"}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>

  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={proector2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Vero</Heading>
      <Text>
      Проекторы, разработанные с учетом принципов устойчивого развития, позволяют получать соответствуют ожиданиям пользователей.
      </Text>
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
      src={proector3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Домашние  развлечения</Heading>
      <Text>
      Этот проектор превратит вашу гостиную в настоящий кинотеатр.
      </Text>
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
      src={proector4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Конференц-залы</Heading>
    
     <Text>Проекторы для деловых встреч.</Text>
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
      src={proector5}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Большие помещения</Heading>
      <Text>
      Лучший выбор проекторов для профессиональных конференций и выставок.
      </Text>
    </Stack>
  </CardBody>
 <CardFooter>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
 </CardFooter>
</Card>
  </GridItem>
</Grid>
<Box
      h={100}
      bgImage={proector1} 
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      p={4} 
      boxShadow="md" 
      position="relative" 
    >
      <Button 
      variant='link'        
          color="green" 
        position="absolute"
        bottom={4} 
        left={4} 
        p={2} 
        borderRadius="md"
      >
       Расчет параметров проекции
      </Button>
    </Box>

    </Container>
    </>

  )
}
export default Proector