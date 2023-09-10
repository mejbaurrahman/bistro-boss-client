import { FaHome } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, Outlet } from "react-router-dom";



export default function Dashbord() {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side bg-[#D1A054]">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 min-h-full text-base-content">
        {/* Sidebar content here */}
        <h2 className="uppercase text-2xl text-center font-bold">Bistro boss</h2>
        <h5 className="dashbord-heading uppercase text-sm text-center font-semibold mb-6">Restaurant</h5>
        <li className="uppercase text-center"><Link to='/dashbord/userhome'><FaHome></FaHome>Admin Home</Link></li>
        <li className="uppercase text-center"><Link to='/dashbord/'><TfiMenuAlt></TfiMenuAlt>Manage Item</Link></li>
        <li className="uppercase text-center"><Link to='/dashbord/userhome'><FaHome></FaHome>Admin Home</Link></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    
    </div>
  </div>
  )
}
