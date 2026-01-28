
//import React from 'react'
import Button from '../ui/Button'
import { BsArrowRight } from 'react-icons/bs'
import { assets } from "../../assets/assets";


const Neighbourhood = () => {
return (
<section className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl font-bold mb-3">Our Objectives</h3>
<p className="text-sm mb-3">The aim for the establishment of Mboho Anam includes fostering unity, promoting peace, love and respect among the Anam people. Mboho Anam is dedicated to human capital development through scholarships and bursaries.</p>
<div className="mt-4">
<Button text="Read More" className="bg-primary text-white" icon={<BsArrowRight />} />
</div>
</div>


<div className="order-1 lg:order-2">
<img src={assets.gallery} alt="Gallery" className="w-full h-auto rounded-lg shadow-lg" />
</div>
</div>
</section>
)
}


export default Neighbourhood;