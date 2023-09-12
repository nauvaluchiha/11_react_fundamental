import { createRoutesFromElements, createBrowserRouter, Route, Link, Outlet, RouterProvider } from "react-router-dom";
import { CreateProduct } from "@/Pages/CreateProduct";
import Navbar from "@/components/Nav/NavBar";
// Import our custom CSS
// import './styles.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<h1>Ini home</h1>} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/tes" element={<h1>Tes</h1>} />
        <Route path="*" element={<h1>Not Foundddd</h1>} />
      </Route>
    )
  )
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
