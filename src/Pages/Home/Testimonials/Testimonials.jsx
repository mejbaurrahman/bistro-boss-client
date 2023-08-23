import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";

export default function Testimonials() {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=> setReviews(data))
    }, [])
  return (
    <section className="my-10 md:w-5/6 mx-auto">
        <SectionTitle subHeading={'What Our Client Says'} heading={'Testimonials'}></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide
            
            key= {review._id}
            >
                <div className="flex flex-col justify-center items-center my-16 mx-12">
                <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
                />
                    <p className="text-center">{review.details}</p>
                    <h3 className="text-2xl uppercase text-orange-400 text-center">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}
