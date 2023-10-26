import { Box, Container, HStack, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { Basket } from "@styled-icons/ionicons-sharp/Basket";

import BurgerMenu from "./BurgerMenu";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import acer from "../../assets/icons/acer.svg"
const Header = () => {
  const { basket } = useContext(BasketContext);
  return (
    <>
    <Container
      display={"flex"}
      gap={"40px"}
      alignItems={"center"}
      maxW={"1300px"}
      p={"20px"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <BurgerMenu />
        <Box marginRight={20}> 
          <Link  to={"/"} >
            <Image src={acer} height={25} minW={"112px"} />
          </Link>
        </Box>
        <Box display={{base:"none",sm:"none",md:"none",lg:"flex"}} justifyContent={"space-between"} gap={10}>
          <Link to={"/"}>Products</Link>
          <Link to={"/"}>Business</Link>
          <Link to={"/"}>Education</Link>
          <Link to={"/"}>Support</Link>
          <Link to={"/"}>Events</Link>
        </Box>
      </Box>
      <Box width={"100%"} display={{ base: "none", sm: "block" }}>
        <Filter />
      </Box>
      <HStack spacing={"20px"}>
      <Link to="/basket" style={{ position: "relative" }}>
          <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-20px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {basket.length}
          </Text>
          <Tooltip label="basket" hasArrow>
            <Basket width={25} height={25} position={""} />
          </Tooltip>
        </Link>
      </HStack>
    </Container>
    
    </>
  );
};

export default Header;
