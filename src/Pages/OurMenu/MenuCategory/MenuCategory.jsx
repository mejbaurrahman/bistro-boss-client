import MenuItem from "../../../Components/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";

export default function MenuCategory({items, title, coverImg, buttonName}) {
  return (
    <div className="my-10">
        {title && <Cover img={coverImg} title={title}></Cover>}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 my-10 w-5/6 mx-auto">
        {
            items.map(item =><MenuItem
             key = {item._id}
             item = {item}
            ></MenuItem>)
        }
        </div>
        <div className="flex justify-center">
        <button className="btn border-t-0 border-s-0 border-e-0 border-b-2 border-black">{buttonName}</button>
        </div>
    </div>
  )
}
