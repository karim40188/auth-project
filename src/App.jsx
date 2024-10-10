import { Box } from "@mui/material";
import Register from "./components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
function App() {
  let router = createBrowserRouter([
    { path: "/", element:<Layout/> },
  ]);
  return (
    <Box>
      <RouterProvider router={router}>
        <Register />
      </RouterProvider>
    </Box>
  );
}

export default App;
