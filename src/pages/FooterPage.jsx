import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

 const FooterPage = () => {
  return (
    <>
    
    <Box  display={{base:"inline",sm:"flex"}} justifyContent={"space-between"} gap={6} mt={100}> 
      
   <Box>
    <Text as={"b"}>Products</Text>
    <br />
    <Link>Laptops</Link>
    <br />
    <Link>Desktop PCs</Link>
    <br />
    <Link>Chromebooks</Link>
    <br />
    <Link>Tablets</Link>
    <br />
    <Link>Monitors</Link>
    <br />
    <Link>Projectors</Link>
    <br />
    <Link>Digital scoreboards</Link>
    <br />
    <Link>Accessories</Link>
    <br />
    <Link>Network connection</Link>
    <br />
    <Link>e-mobility</Link>
    <br />
    <Link>Eco-friendly PCs</Link>
    </Box>
    <Box>
    <Text as={"b"}>Support</Text>
    <br />
    <Link>Acer ID</Link>
    <br />
    <Link>Product Registration </Link>
    <br />
    <Link>Acer Community</Link>
    <br />
    <Link>Drivers and manuals</Link>
    <br />
    <Link>Acer Answers</Link>
    <br />
    <Link>Service contact</Link>
    <br />
   
    </Box>
    <Box>
    <Text as={"b"}>Resources</Text>
    <br />
    <Link>Acer Global Account Portal</Link>
    <br />
    <Link>Find a store</Link>
    <br />
    <Link>Acer Technologies</Link>
    <br />
    <Link>McAfee</Link>
    
    </Box>
  
    <Box>
    <Text as={"b"}>About Acer</Text>
    <br />
    <Link>Our contacts</Link>
    <br />
    <Link>Investor Relations</Link>
    <br />
    <Link>For the press</Link>
    <br />
    <Link>Awards</Link>
    <br />
    <Link>Events</Link>
    <br />
    <Text as={"b"}>Principles of sustainable development</Text>
    <br />
    <Link>Corporate Social Responsibility</Link>
    <br />
    <Link>Carbon footprint of products</Link>
    <br />
    <Link>Project Humanity</Link>
    <br />
    <Link>Earthion</Link>
    
    </Box>
    </Box>
    
    <br />
    <hr />
    <br />

    <Grid templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(2, 1fr)',md:'repeat(3, 1fr)',lg:'repeat(4, 1fr)'}} gap={6}> 
    <GridItem>
      <a href='https://www.facebook.com/Acer/'>
    <Image w={10} src='https://thumbs.dreamstime.com/b/facebook-logo-icon-voronezh-russia-november-round-black-color-164585783.jpg' />
      </a>
      </GridItem>
      <GridItem>
      <a href='https://www.instagram.com/Acer/'>
    <Image w={10} src='https://img.freepik.com/premium-vector/black-square-social-media-logo_197792-3367.jpg' />
      </a>
      </GridItem>
      <GridItem>
      <a href='https://twitter.com/AcerRu'>
    <Image w={10} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wnOpxaOAt1uOAg9cwadFExpQ58T6-1BJ4IxqoGXoyA&s' />
      </a>
      </GridItem>
      <GridItem>
      <a href='https://www.youtube.com/channel/UCDVFkz-zoNZMB_RX9bytzgQ'>
    <Image w={10} src='https://i.pinimg.com/originals/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.png' />
      </a>
      </GridItem>

    </Grid>
    </>
  )
}

export default FooterPage