import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

// LAYOUTS
import RootLayout from './Layouts/RooLayout/RootLayout'
import Home from './Pages/Home'
import Trends from './Pages/Trends'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='trend' element={<Trends />} />
    </Route>

  )
)
function App() {
 

  return (
    <div>
           <RouterProvider router={router} />
    </div>
  )
}

export default App
