import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";



export default function FoodCard({item}) {
    const {name, recipe, image, price} = item;
    const location = useLocation()
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart=item=>{
        console.log(item)
       
        if(user?.email){
            const menuItem = {
                menuItemId: item._id,
                name: item.name, 
                image: item.image, 
                price: item.price,
                email: user?.email
            }
            axios.post('http://localhost:5000/carts', menuItem)
              .then(function (response) {
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item is Added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
              })
              .catch(function (error) {
                console.log(error);
              })
           
        }else{
            Swal.fire({
                title: 'You have to login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}} )
                }
              })

        }
    }
  return (
         <div className="card  bg-base-100 shadow-xl">
        <figure className="">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">${price}</p>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
            <button onClick={()=>handleAddToCart(item)} className="btn border-t-0 border-s-0 border-e-0 border-b-2 border-orange-500 text-orange-500">Add to Cart</button>
            </div>
        </div>
        </div>
       
    
  )
}
