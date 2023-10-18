import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'
import BasketPage from '../pages/BasketPage'
import Noutbooks from "../pages/Noutbooks"
import Pc from "../pages/Pc"
import Monitors from "../pages/Monitors"
import Proector from "../pages/Proector"
import Aksessuars from "../pages/Aksessuars"
import Gaming from "../pages/Gaming"
import Swift from "../pages/Swift"
import Aspire from "../pages/Aspire"
import Porsche from "../pages/Porsche"
import Nitro from "../pages/Nitro"
import Enduro from "../pages/Enduro"
import Endurourban from "../pages/Endurourban"
import Travel from "../pages/Travel"
import Extensa from "../pages/Extensa"
import Spin from "../pages/Spin"
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/noutbooks',
        element: <Noutbooks/>,
      },
      {
        path: '/pc',
        element: <Pc/>,
      },
      {
        path: '/monitors',
        element: <Monitors/>,
      },
      {
        path: '/proector',
        element: <Proector/>,
      },
      {
        path: '/aksessuars',
        element: <Aksessuars/>,
      },
      {
        path: '/basket',
        element:<BasketPage />,
      },
      {
        path: '/gaming',
        element: <Gaming/>,
      },
      {
        path: '/swift',
        element: <Swift/>,
      },
      {
        path: '/aspire',
        element: <Aspire/>,
      },
      {
        path: '/spin',
        element: <Spin/>,
      },
      {
        path: '/porsche',
        element: <Porsche/>,
      },
      {
        path: '/nitro',
        element: <Nitro/>,
      },
      {
        path: '/enduro',
        element: <Enduro/>,
      },
      {
        path: '/endurourban',
        element: <Endurourban/>,
      },
      {
        path: '/travel',
        element: <Travel/>,
      },
      {
        path: '/extensa',
        element: <Extensa/>,
      },
      {
        path: '/spin',
        element: <Spin/>,
      },
    ],
  },
])
