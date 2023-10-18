import { Container } from '@chakra-ui/react'
import React from 'react'
import monitor1 from "../assets/images/monitor1.png"
import monitor2 from "../assets/images/monitor2.png"

import { Card, Grid,GridItem,CardBody,Stack,Heading,Text,Image, CardFooter, Button,  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import monitor3 from "../assets/images/monitor3.png"
import monitor4 from "../assets/images/monitor4.png"
import monitor5 from "../assets/images/monitor5.png"
import monitor6 from "../assets/images/monitor6.png"
import monitor7 from "../assets/images/monitor7.png"
import monitor8 from "../assets/images/monitor8.png"
 const Pc = () => {
  return (
    <>
    <Container maxW={'1280px'} p={"20px"}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={monitor1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Для игр</Heading>
      <Text>
      Идеальные игровые системы для
      прохождения уровней,
      прокачивания персонажей и
      сокрушения противников.
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
      src={monitor2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем классический настольный компьютер Aspire для дома</Text>
      <Heading>
      Классические
настольные
компьютеры Aspire
     
      </Heading>
     <Text>Уникальные и универсальные возможности в рамках одного настольного компьютера.</Text>
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
      src={monitor3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем моноблок Aspire для дома</Text>
      <Heading>
      Универсальные
моноблоки Aspire
      </Heading>
     <Text>Главное — это легкость и простота.</Text>
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
      src={monitor4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем мини-ПК для дома</Text>
      <Heading>
      Мини-ПК
      </Heading>
     <Text>Мини-ПК, который не занимает много места и при этом обладает значительным потенциалом.</Text>
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
      src={monitor5}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Встречайте команду</Text>
      <Heading>
      Nitro
      </Heading>
     <Text>На старт. Внимание. Марш!</Text>
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
      src={monitor6}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем настольные компьютеры Veriton для бизнеса</Text>
      <Heading>
      Veriton для бизнеса     
      </Heading>
     <Text>Любые размеры и конфигурации для удовлетворения ваших потребностей.</Text>
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
      src={monitor7}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем Acer Add-In-One</Text>
      <Heading>
      Add-In-One
      </Heading>
     <Text>Обеспечьте вычислительную  потребностей с помощью этого модульного моноблока.</Text>
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
      src={monitor8}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Text size='md'>Представляем Acer Chromebox</Text>
      <Heading>
      Chromebox
      </Heading>
     <Text>Получите множество возможностей благодаря устройству Chromebox малого форм-фактора.</Text>
    </Stack>
  </CardBody>
 <CardFooter>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
 </CardFooter>
</Card>
  </GridItem>
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
 

 
</Grid>
    </Container>
    </>
  )
}
export default Pc