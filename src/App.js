import './App.css';
import { AboutPage } from './components/AboutPage';
import {useEffect,Suspense} from 'react'
import { Quotelayout } from './components/Quotelayout';
import ContactPage from './components/ContactPage.jsx';
import { Layout } from './components/Layout.jsx'
import { RouterProvider, useLocation, useNavigationType } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { useState } from 'react';


const route = createBrowserRouter(
  createRoutesFromElements(
      <Route path = '/' element = {<Layout/>}>
          <Route index element = {<Quotelayout/>}></Route>
          <Route path = '/about' element = {<AboutPage/>}/>
          <Route path = '/contact' element = {<ContactPage/>}/>
      </Route>
  )
)

function App() {

  return (
    <RouterProvider router={route} />
  );
}

export default App;
