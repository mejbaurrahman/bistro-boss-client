import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBossCover from "../BistroBossCover/BistroBossCover";
import CallNumber from "../CallNumber/CallNumber";
import Featured from "../Featured/Featured";
import ItemCategory from "../ItemCategory/ItemCategory";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <ItemCategory></ItemCategory>
      <BistroBossCover></BistroBossCover>
      <PopularItems></PopularItems>
      <CallNumber></CallNumber>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}
