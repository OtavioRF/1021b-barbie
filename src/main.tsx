import React from 'react'
import './main.css'
import Header from './componentes/header/Header.tsx'
import Footer from './componentes/footer/Footer.tsx'
import Main from './componentes/main/Main.tsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <>
               <Header/>
               <Main/>
               <Footer/>
              </>,
  },
 
  {
    path: "/noticia",
    element: <>
             <Header/>
             <div className='content_main'>Página noticias do pingola!</div>
             <Footer/>
            </>,
  },
  {
    path: "/sobre",
    element: <>
              <Header/>
              <div className='content_main' >Página sobre o pingola!</div>
              <Footer/>
             </>,
  },
  {
    path: "/contato",
    element: <>
              <Header/>
               <div className='content_main' >Página de contato do pingola!</div>
               <Footer/>
             </>
  },
  {
    path: "/teste",
    element: <>
              <Header/>
               <Footer/>
             </>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
