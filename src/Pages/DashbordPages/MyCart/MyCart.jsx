import { Helmet } from "react-helmet-async";
import PageHeading from "../../../Components/DashbordComponents/PageHeading/PageHeading";
import useCart from "../../../Hooks/useCart";
import MyCartTable from "./MyCartTable/MyCartTable";


export default function MyCart() {
  const [cart, ] = useCart();
  return (
    <>
    <Helmet>
        <title>Bistro Boss | My Cart</title>
    </Helmet>
    <div className="w-5/6">
    <PageHeading subHeading={'My Cart'} heading={'WANNA ADD MORE'}></PageHeading>
      <div className="flex  h-10 justify-evenly items-center">
        <div><h1 className="uppercase text-xl font-semibold">Total Order: {cart?.length}</h1></div>
        <div><h1 className="uppercase text-xl font-semibold">Total Price: ${cart.reduce((total, currentValue)=>total+ currentValue?.price, 0)}</h1></div>
        <button className="btn btn-sm btn-warning">Pay</button>
       
      </div>
      

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart?.map((item, index)=><MyCartTable 
        key={item._id}
        item={item}
        index = {index}
        ></MyCartTable>)
      }
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
    </div>
    </>
  )
}
