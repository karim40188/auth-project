import { Box } from "@mui/material";
import Register from "./components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QrCode from "./components/QrCode";
function App() {
  let router = createBrowserRouter([
    { path: "/", element: <QrCode /> },
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
