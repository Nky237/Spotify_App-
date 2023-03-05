import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

// LAYOUTS
import RootLayout from './Layouts/RooLayout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

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
