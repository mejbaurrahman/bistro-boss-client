import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css' 

export default function Featured() {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-10">
        <SectionTitle subHeading={'check it out'} heading={'Featured Item'}></SectionTitle>
        <div className="md:flex justify-center items-centers pb-20 pt-12 px-16 bg-slate-500 bg-opacity-40">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className=" md: ml-10">
            <p>AUG 20, 2029</p>
            <p className="uppercase">Where can I get some</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut suscipit temporibus adipisci consequuntur accusamus, molestiae facere eligendi. Molestiae nisi temporibus provident tempora quas iure beatae, aliquam quam accusamus a id omnis similique assumenda fugit amet optio ipsa veniam adipisci vero libero, asperiores eius fuga? Ea dolorem totam eius libero et.</p>
            
        <button className="btn border-t-0 border-s-0 border-e-0 border-b-2 border-black mt-4">Read More</button>
     
        </div>
        </div>
    </div>
  )
}
