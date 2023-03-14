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
  createRoutesFromElements(
    <>
      <Route index element= {<Land />} />
    <Route path='' element={<RootLayout />}>
        <Route path="" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path='trend' element={<Trends />} />
        <Route path='artist' element={<Artist />} />
        <Route path='fav' element={<Favourite />} />
        <Route path='new' element={<Notable />} />
        <Route path='release' element={<Release />} />
        <Route path='feed' element={<Feed />} />
        <Route path='event' element={<Event />} />
    </Route>
    </>

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
