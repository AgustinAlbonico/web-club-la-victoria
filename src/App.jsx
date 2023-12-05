import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Navbar/Navbar";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <WhatsappButton />
    </>
  );
}

export default App;
