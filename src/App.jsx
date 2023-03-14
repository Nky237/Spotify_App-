import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from 'react-router-dom'

// LAYOUTS
import RootLayout from './Layouts/RooLayout/RootLayout'

// PAGES
import Home from './Pages/Home'
import Trends from './Pages/Trends'
import Artist from './Pages/collection/Artist'
import Favourite from './Pages/collection/Favourite'
import Notable from './Pages/discover/Notable'
import Release from './Pages/discover/Release'
import Feed from './Pages/Feed'
import Event from './Pages/discover/Event'
import Land from './Pages/Land'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Land />,
      errorElement: (
            <span>😅</span>
      ),
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]
)

function App() {
  return (
    <div>
           <RouterProvider router={router} />
    </div>
  )
}

export default App
