import React from 'react'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { BASE_PATH } from '../config'
import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Chat />} /> */}
    </Route>
  ),
  {
    basename: BASE_PATH,
  }
)

const Router = () => <RouterProvider router={router} />

export default Router
