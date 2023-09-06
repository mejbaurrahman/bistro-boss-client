
import FoodCard from "../../../Components/FoodCard/FoodCard";



export default function OrderTab({item}) {
 
  return (

    <div className='grid md:grid-cols-3  gap-6 mt-10'>
    {
       item.map(item=><FoodCard
       key={item._id}
       item={item}
       ></FoodCard>)
     }
    </div>
    
  )
}
