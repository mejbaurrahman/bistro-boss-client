import { FaTrash } from "react-icons/fa"
import useCart from "../../../../Hooks/useCart"
import axios from "axios";
import Swal from "sweetalert2";


export default function MyCartTable({item, index}) {
    const [, refetch] = useCart()
    const handleDelete=(item)=>{
    axios.delete(`http://localhost:5000/carts/${item._id}`)
  .then(response => {
    console.log(response)
    if(response.status==200){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Deleted Succesfully',
            showConfirmButton: false,
            timer: 1500
          })
        refetch();
    }
  })
  .catch(error => {
    console.error(error);
  });
    }
  return (
    <tr>
    <th>
      <label>
        {index+1}
      </label>
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        
      </div>
    </td>
    <td>
      {item.name}
      
    </td>
    <td className="text-center">${item?.price}</td>
    <th>
      <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm text-red-600"><FaTrash></FaTrash></button>
    </th>
  </tr>
  )
}
