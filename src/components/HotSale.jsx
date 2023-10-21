import { useEffect, useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sofaService } from "../service/sofaService";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";

const HotSale = () => {
  const { setProductToStorage } = useContext(BasketContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    sofaService.getProduct().then((response) => setProduct(response.products));
  }, []);

  const addToBasket = (item) => {
    setProductToStorage(item);
  };

  const openModal = () => {
    onOpen();
  };

  return (
    <Box mt={"35px"}>
      <Grid templateColumns={"repeat(4,1fr)"} gap={"20px"}>
        {product.map((item) => {
          return (
            <GridItem
              background={"whiteAlpha.200"}
              height={"fit-content"}
              key={item.id}
              borderRadius={10}
              className="aa"
            >
              <Box
                height={"100%"}
                cursor={"pointer"}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <Box overflow={"hidden"} height={"250px"}>
                  <Image
                    src={item.thumbnail}
                    width={"100%"}
                    objectFit={"cover"}
                    height={"250px"}
                    borderTopRadius={10}
                    className="aa_img"
                    draggable={false}
                    transition={"150ms"}
                  />
                </Box>

                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                </VStack>
              </Box>
              <Box p={"10px"} display={"flex"}>
                
                <Button
                  className="product__card-btn"
                  width={"70%"}
                  onClick={() => addToBasket(item)}
                  colorScheme="facebook"
                >
                  Добавить в корзину
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HotSale;
