import { FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import {TfiMenuAlt} from 'react-icons/tfi'
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";



export default function Dashbord() {
  const [cart, ] = useCart()
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4  bg-[#D1A054] min-h-full text-base-content">
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
        ><FaShoppingCart></FaShoppingCart>My Cart 
        <div className="badge badge-secondary">{cart?.length}</div>
        </NavLink></li>

        <div className="divider"></div>

        <li className="uppercase text-center"><NavLink to='/'
        
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaHome></FaHome> Home</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/menu'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><TfiMenuAlt></TfiMenuAlt> Menu</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/order/salad'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
        <li className="uppercase text-center"><NavLink to='/order'
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
          };
        }}
        ><FaEnvelope></FaEnvelope> Contact</NavLink></li>
        
      </ul>
    
    </div>
  </div>
  )
}
