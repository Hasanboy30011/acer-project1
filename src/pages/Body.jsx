import React from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Text,Image } from '@chakra-ui/react'
import card5 from "../assets/images/card5.png"
import card1 from "../assets/images/card1.png"
import card2 from "../assets/images/card2.png"
import card3 from "../assets/images/card3.png"
import card4 from "../assets/images/card4.png"
import card9 from "../assets/images/card9.png"
import card6 from "../assets/images/card6.png"
import card7 from "../assets/images/card7.png"
import card8 from "../assets/images/card8.png"
import nout10 from "../assets/images/nout10.png"
import { Link } from 'react-router-dom'
const Body = () => {
  return (
    <>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)',xl:'repeat(5, 1fr)'}} gap={6}>
  <Link to={"/noutbooks"}>
  <GridItem >
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout10}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Ноутбуки</Heading>
      
    </Stack>
  </CardBody>

</Card></GridItem>
</Link>
<Link to={"/pc"}>
  <GridItem  >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card6}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Настольные ПК</Heading>
      
    </Stack>
  </CardBody>

</Card>
  </GridItem>
  </Link>
  <Link to={"/monitors"}>
  <GridItem  >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card7}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Мониторы</Heading>
    
    </Stack>
  </CardBody>

</Card>
  </GridItem>
  </Link>
  <Link to={"/proector"}>
  <GridItem   >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card8}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Проекторы</Heading>
      
    </Stack>
  </CardBody>

</Card>
  </GridItem>
  </Link>
  <Link to={"/aksessuars"}>
  <GridItem   >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card5}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Аксессуары</Heading>
     
    </Stack>
  </CardBody>

</Card>
  </GridItem>
  </Link>
</Grid>

<Grid mb={100} templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)',}} gap={6}>
 <GridItem >
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={card1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Windows 11</Heading>
      <Text>Представляем Windows 11</Text>
      
    </Stack>
  </CardBody>
<CardFooter><Button colorScheme='green' variant={"link"}>Подробнее</Button></CardFooter>
</Card></GridItem>
  <GridItem  >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Acer Vero</Heading>
      <Text>Экологичные ПК</Text>
      
    </Stack>
  </CardBody>
  <CardFooter><Button colorScheme='green' variant={"link"}>Подробнее</Button></CardFooter>

</Card>
  </GridItem>
  <GridItem>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Acerpure</Heading>
    <Text>Воздухоочистители acerpure наполняют дом чистым воздухом благодаря фильтрации и рециркуляции.</Text>
    </Stack>
  </CardBody>
  <CardFooter><Button colorScheme='green' variant={"link"}>Подробнее</Button></CardFooter>

</Card>
  </GridItem>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={card3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Acer eScooter Series</Heading>
      <Text>Самокат позволяет быстро и экологично преодолеть путь от метро до работы или дома, отправиться на прогулку по лесу</Text>
      
    </Stack>
  </CardBody>
  <CardFooter><Button colorScheme='green' variant={"link"}>Подробнее</Button></CardFooter>

</Card>
  </GridItem>

</Grid>
<Grid mb={100} templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)',}} gap={6}>
 <GridItem >
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={card9}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Windows 11 Pro</Heading>
      <Text>Windows 11 Pro для ноутбуков Acer для бизнеса</Text>
      
    </Stack>
  </CardBody>
<CardFooter><Button colorScheme='green' variant={"link"}>Подробнее</Button></CardFooter>
</Card></GridItem>
  

</Grid>

    </>
  )
}

export default Body