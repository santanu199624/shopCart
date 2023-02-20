import { Routes, Route } from "react-router-dom";
import { Home, Cart} from "../pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route  path="/" element={< Home />}/>
      <Route  path="/" element={<Cart />}/>
    </Routes>
    </>
  )
}


