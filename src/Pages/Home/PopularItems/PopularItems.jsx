import MenuItem from "../../../Components/MenuItem/MenuItem";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";




export default function PopularItems() {

    const [menu] = useMenu();
    const items = menu.filter(item=> item.category === 'popular')
  return (
    <div className="my-10 w-5/6 mx-auto">
        <SectionTitle subHeading={'check it out'} heading={'from our menu'}></SectionTitle>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mb-8">
        {
            items.map(item =><MenuItem
             key = {item._id}
             item = {item}
            ></MenuItem>)
        }
        </div>
        <div className="flex justify-center">
        <button className="btn border-t-0 border-s-0 border-e-0 border-b-2 border-black">view full menu</button>
        </div>
    </div>
  )
}
