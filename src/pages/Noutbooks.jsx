
import React from 'react'
import nout1 from "../assets/images/nout1.png"
import nout2 from "../assets/images/nout2.png"
import nout3 from "../assets/images/nout3.png"
import nout4 from "../assets/images/nout4.png"
import nout5 from "../assets/images/nout5.png"
import nout6 from "../assets/images/nout6.png"
import nout7 from "../assets/images/nout7.png"
import nout8 from "../assets/images/nout8.png"
import nout9 from "../assets/images/nout9.png"
import nout10 from "../assets/images/nout10.png"
import { Card, Container,Grid,GridItem,CardBody,Stack,Heading,Text,Image, CardFooter, Button,  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
 const Noutbooks = () => {
  return (
     <Container maxW={'1300px'} px={'20px'}>
     <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Для игр</Heading>
      <Text>
      Идеальные ноутбуки для
      прохождения уровней,
      прокачивания персонажей и сокрушения противников.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/gaming"}>
   <Button  colorScheme='green' width={"100%"}>More Details</Button></Link>
 </CardFooter>
</Card>
  </GridItem>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Swift</Heading>
      <Text>
      Тонкий и легкий ультрабук для
      быстрого выполнения задач.
     
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/swift"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button></Link>
 </CardFooter>
</Card>
  </GridItem>
<GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Aspire</Heading>
      <Text>
      Уникальные и универсальные
      возможности в рамках одного
      устройства для повседневного использования.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/aspire"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button></Link>
 </CardFooter>
</Card>
  </GridItem>
  <GridItem>
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Spin</Heading>
      <Text>
      Мощные инновационные
      возможности в корпусе устройства-
      трансформера.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/spin"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
   </Link>
 </CardFooter>
</Card>
  </GridItem>
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout5}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Porsche Design</Heading>
      <Text>
      Впечатляющий ПК, обладающий
      первоклассными характеристиками.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/porsche"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
   </Link>
 </CardFooter>
</Card>
  </GridItem>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout6}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Nitro</Heading>
      <Text>
      Включите режим Turbo и
      насладитесь впечатляющими
      возможностями этого устройства.
      Оцените быстрый дисплей и
      невероятную производительность.     
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"nitro"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
   </Link>
 </CardFooter>
</Card>
  </GridItem>
<GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Enduro</Heading>
      <Text>
      Устройства для работы в полевых
      условиях, которые помогут вам
      справиться с любой задачей.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"enduro"}>   <Button colorScheme='green' width={"100%"}>More Details</Button> </Link>

 </CardFooter>
</Card>
  </GridItem>
  <GridItem  >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout7}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Enduro Urban</Heading>
      <Text>
      Тем, кто постоянно ищет новые
      приключения, необходимы
      устройства с подходящими
      аппаратными возможностями.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={".endurourban"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button></Link>
 </CardFooter>
</Card>
  </GridItem>
</Grid>
<Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
 
<GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout8}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>TravelMate</Heading>
      <Text>
      Легкие и надежные ноутбуки,
      которые легко адаптируются к
      новым гибридным стилям работы и
      учебы и помогают добиться высоких
      результатов.
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
  <Link to={"/travel"}>
   <Button colorScheme='green' width={"100%"}>More Details</Button>
   </Link>
 </CardFooter>
</Card>
  </GridItem>
  <GridItem  >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={nout9}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Extensa</Heading>
      <Text>
      Передовые технологии в
      компактном корпусе для малого
      бизнеса и предпринимателей.
     
      </Text>
     
    </Stack>
  </CardBody>
 <CardFooter>
   <Link to={"/extensa"}>
   <Button  colorScheme='green' width={"100%"}>More Details</Button>
   </Link>
 </CardFooter>
</Card>
  </GridItem>
</Grid>
     </Container>
  )
}
export default Noutbooks