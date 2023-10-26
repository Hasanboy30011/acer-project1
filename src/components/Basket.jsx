import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  console.log(basket);
  return (
    
    <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"}} gap={10}>
   
        {basket.map((item, index) => (
          <Box mb={250}  key={index} border={"1px solid gray"}>
            <Image  src={item.images[0]} width={"100%"} height={"100%"} />
            <Heading>{item.title}</Heading>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </Box>
        ))}
      
    </Grid>
  );
};

export default Basket;
