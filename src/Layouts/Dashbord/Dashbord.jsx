import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";



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
        <li className="uppercase text-center"><NavLink to='/dashbord'
        
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaHome></FaHome>User Home</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/dashbord/'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/dashbord/'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaWallet></FaWallet>Payment History</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/dashbord/mycart'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
        
      </ul>
    
    </div>
  </div>
  )
}
