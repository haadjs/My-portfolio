import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children : [
      {
        path:'/',
        element :<Home />
      },
      {
        path:'about',
        element :<About />
      },
      {
        path:'contact',
        element :<Contact />
      },
      {
        path:'project',
        element :<Projects />
      },
      {
        path:'projects',
        element :<Projects />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
  )
