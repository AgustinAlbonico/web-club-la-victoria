import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';
// import Reservas from './pages/Reservas/Reservas';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Landing />} />
      {/* <Route path='/reservas' element={<Reservas />} /> */}
    </Route>
  )
);
