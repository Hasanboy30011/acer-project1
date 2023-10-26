import { Button, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sofaService } from "../service/sofaService"

const Product = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let data = sofaService.getOneProduct(id);
    data.then((res) => setState(res));
  }, [id]);
  console.log(state);
  console.log();
  return (
    <Container maxW="1300px" px="20px">
      {!Object.keys(state).length && <Heading>loading</Heading>}
      <Image
        src={state.thumbnail}
        width={"100%"}
        height={700}
        objectFit={"cover"}
      />
      <Center>
      <Heading fontSize={100}>{state.title}</Heading>
      </Center>
      <Center>
      <Text fontSize={30}>{state.description}</Text>
      </Center>
      <Center>
      <Text fontSize={30} as={"b"}>${state.price}</Text>
      </Center>
      
    </Container>
  );
};
export default Product;
