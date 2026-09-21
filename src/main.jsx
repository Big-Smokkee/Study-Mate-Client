import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import HomeLayout from './layouts/HomeLayout.jsx';
import FindPartners from './components/FindPartners/FindPartners.jsx';
import Root from './layouts/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: HomeLayout
      },
      {
        path: "/find-partners",
        Component: FindPartners
      },
      {
        path: "/create-partner-profile"
      },
      {
        path: "/my-connections"
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
