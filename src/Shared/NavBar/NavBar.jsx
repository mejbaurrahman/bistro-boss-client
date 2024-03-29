import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/AuthProvider"
import {FaShoppingCart} from 'react-icons/fa';
import useCart from "../../Hooks/useCart";

export default function NavBar() {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();


  const navOptions = <>
  <li className="uppercase"><Link to='/'>Home</Link></li>
  <li className="uppercase"><Link to='/menu'>Our Menu</Link></li>
  <li className="uppercase"><Link to='/order/salad'>Our Order</Link></li>
  <li className="uppercase"><Link to='/secret'>Secret</Link></li>
  <li className="uppercase"><button className="btn">
  <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">{cart?.length}</div>
</button></li>
  
  {
    user ? <button onClick={logOut} className="btn btn-neutral">Logout</button>:
    
    <><li className="uppercase"><Link to='/login'>Login</Link></li>
    <li className="uppercase"><Link to='/signup'>Sign Up</Link></li></>
  }
  
  </>

  return (
    <div className="navbar fixed bg-slate-100 bg-opacity-50 text-black md:w-[1140px] mx-auto z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Bistro-Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}
