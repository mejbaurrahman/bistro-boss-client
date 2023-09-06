import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'

import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import drinkImg from '../../../assets/menu/banner3.jpg'

export default function OurMenu() {
    const [menu] = useMenu();
    const dessert = menu.filter(item=> item.category=='dessert')
    const pizza = menu.filter(item=> item.category=='pizza')
    const salad = menu.filter(item=> item.category=='salad')
    const drinks = menu.filter(item=> item.category=='drinks')
    const soup = menu.filter(item=> item.category=='soup')
    const offered = menu.filter(item=> item.category=='offered')
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'OUR MENU'}></Cover>
        <SectionTitle subHeading={`Don't miss`} heading={`Today's Offer`}></SectionTitle>
        {/* offered menu items */}
        <MenuCategory items={offered}></MenuCategory>
        {/* dessert menu items */}
        <MenuCategory items={dessert}
        title={'dessert'}
        coverImg={dessertImg}
        buttonName={'order your fevorite food'}></MenuCategory>
       
        {/* salads menu items */}
        <MenuCategory items={salad}
        title={'salad'}
        coverImg={saladImg}
        buttonName={'order your fevorite food'}></MenuCategory>
         {/* pizza menu items */}
         <MenuCategory items={pizza}
        title={'pizza'}
        coverImg={pizzaImg}
        buttonName={'order your fevorite food'}></MenuCategory>
         {/* soup menu items */}
         <MenuCategory items={soup}
        title={'soup'}
        coverImg={soupImg}
        buttonName={'order your fevorite food'}></MenuCategory>
         {/* drinks menu items */}
         <MenuCategory items={drinks}
        title={'drinks'}
        coverImg={drinkImg}
        buttonName={'order your fevorite food'}></MenuCategory>
       
    </div>
  )
}
