import { Container } from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'
import TabMenu from '../components/Menu/Menu'
import Body from "../pages/Body"
import FooterPage from "../pages/FooterPage"
const HomePage = () => {
  return (
    <Container maxW={'1300px'} px={'20px'}>
      <Carousel />
      <Body/>
     <FooterPage/>
    </Container>
  )
}
export default HomePage
