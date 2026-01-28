//import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from "../../assets/assets";


const leadership = [
{ id: 1, caption: 'Board Of Trustees (BOT)', img: assets.Sir_Udo3, path: '/bot' },
{ id: 2, caption: 'National Executive Committee (NEC)', img: assets.Nat_excos, path: '/nec' },
{ id: 3, caption: 'General Members', img: assets.gen_member, path: '/members' },
]


const Leadership = () => {
const navigate = useNavigate()
return (
<section className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">Leadership Structure of the Mboho Anam</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{leadership.map((card) => (
<div key={card.id} onClick={() => navigate(card.path)} className="relative h-56 rounded-lg overflow-hidden cursor-pointer shadow-md transform hover:scale-105 transition duration-300" style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className="absolute inset-0 bg-black/35 flex items-end p-4">
<h3 className="text-white font-semibold text-lg">{card.caption}</h3>
</div>
</div>
))}
</div>
</div>
</section>
)
}


export default Leadership
