import { createBrowserRouter, createRoutesFromChildren, Route, Router, RouterProvider, Routes } from "react-router-dom";
import { RegisterPage } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
   <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" />
      <Route path="/">
        <Route path="home" />
        <Route path="conversations" />
      </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
