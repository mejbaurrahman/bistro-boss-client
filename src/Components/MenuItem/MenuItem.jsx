export default function MenuItem({item}) {
    const {name, recipe, image, price} = item;
  return (
    <div className="flex space-x-4">
        <img className="w-[120px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" src={image} alt="" />
        <div>
            <h1 className="uppercase text-xl">{name}---</h1>
            <p>{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>

    </div>
  )
}
