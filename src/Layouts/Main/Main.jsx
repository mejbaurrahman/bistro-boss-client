import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import Footer from "../../Shared/Footer/Footer";

export default function Main() {
  const location = useLocation()
  const noHeaderAndFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div>
        {noHeaderAndFooter || <NavBar></NavBar>}
        <Outlet></Outlet>
        {noHeaderAndFooter|| <Footer></Footer>}
    </div>
  )
}
