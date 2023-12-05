import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Reservas from "./Pages/Reservas/Reservas";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/reservas' element={<Reservas />} />
    </Route>
  )
);
