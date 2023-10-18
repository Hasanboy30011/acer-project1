import React from 'react'

import { Card, Container,Grid,GridItem,CardBody,Stack,Heading,Text,Image, CardFooter, Button,  } from '@chakra-ui/react'
import pc1 from "../assets/images/pc1.png"
import pc2 from "../assets/images/pc2.png"
import pc3 from "../assets/images/pc3.png"
import pc4 from "../assets/images/pc4.png"
import pc5 from "../assets/images/pc5.png"
import pc6 from "../assets/images/pc6.png"
 const Monitors = () => {
  return (
    <>
      <Container maxW={'1280px'} p={"20px"}>
    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}>
  <GridItem >
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={pc1}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Для развлечений</Heading>
      <Text>
      Мощный монитор для развлечений.
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
      src={pc2}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Бизнес</Heading>
      <Text>
      Мониторы для бизнес-вычислений.
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
      src={pc3}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Для дома</Heading>
      <Text>
      Мониторы для решения повседневных задач.
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
      src={pc4}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Сенсорный экран</Heading>
    
     <Text>Мультисенсорный дисплей.</Text>
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
      src={pc5}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Для игр</Heading>
      <Text>
      Универсальный монитор, подходит как для динамичного геймплея с высокой частотой обновления, так и для игр с насыщенной цветовой гаммой.
      </Text>
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
      src={pc6}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>SpatialLabs™</Heading>
      <Text>
      Встроенные возможности этих мониторов для геймеров и создателей контента обеспечивают просмотр проектов в стереоскопическом 3D-пространстве с эффектом погружения.   
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
    </>

  )
}
export default Monitors