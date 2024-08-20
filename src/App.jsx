
import Transection from './pages/Transection/Transection';
import Support from './pages/Support/Support'
import Dashboard from './pages/Dashboard/Dashboard'
import "@fontsource/ubuntu"; 
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element :<Dashboard/>
    },
    {
      path: "/transection",
      element :<Transection/>
    },
    {
      path: "/support",
      element :<Support/>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
