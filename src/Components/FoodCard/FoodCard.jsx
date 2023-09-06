

export default function FoodCard({item}) {
    const {name, recipe, image, price} = item;
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
            <button className="btn border-t-0 border-s-0 border-e-0 border-b-2 border-orange-500 text-orange-500">Add to Cart</button>
            </div>
        </div>
        </div>
       
    
  )
}
