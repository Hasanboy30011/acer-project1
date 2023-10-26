import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from './Header/TopHeader'
import Header from './Header/Header'
import { Box, Center, Container } from '@chakra-ui/react'
import Filter from './Header/Filter'
import FooterPage from "../pages/FooterPage"
const Layout = () => {
  return (
    <>
      <header>
        <TopHeader />
        <Header />
        <Container p={'10px 20px'} display={{ base: 'block', sm: 'none' }}>
          <Filter />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer><FooterPage/></footer>
      <footer><Center> Powered by <a href="https://www.youtube.com/@infinitychess12/videos">Khasanboy</a>←←←Click this</Center></footer>
    </>
  )
}

export default Layout
