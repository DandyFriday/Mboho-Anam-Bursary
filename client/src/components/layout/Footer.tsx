//import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from "../../assets/assets";
import { BiEnvelope } from 'react-icons/bi'
import { BsTelephone, BsGeoAlt } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
const footerLinks = [
{ header: 'Company', links: ['Contact us', 'Careers', 'Culture'] },
{ header: 'Support', links: ['Help center', 'Server status', 'Report a bug', 'Chat support'] },
{ header: 'Legal', links: ['Privacy Policy', 'Terms of Use', 'Payments', 'Cookies & Data Privacy'] },
]


return (
<footer className="bg-[#065f46] text-gray-100 mt-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<Link to="/" className="flex items-center gap-3">
<img src={assets.logo_web} alt="logo" className="h-12 w-auto" />
<span className="font-bold text-lg">Mboho Anam</span>
</Link>
<p className="mt-4 text-sm">Our bursary exercise is to promote diligence <br/>and hard work amongst the students of Anam.</p>
<div className="flex gap-3 mt-4">
<FaFacebookF />
<FaTwitter />
<FaInstagram />
<FaLinkedin />
</div>
</div>


{footerLinks.map((col) => (
<div key={col.header}>
<h4 className="font-semibold mb-3">{col.header}</h4>
<ul className="space-y-2 text-sm">
{col.links.map((l) => (
<li key={l}><Link to="#" className="hover:underline">{l}</Link></li>
))}
</ul>
</div>
))}


<div>
<h4 className="font-semibold mb-3">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><BiEnvelope /> dandyfriday31@gmail.com</li>
<li className="flex items-center gap-2"><BsTelephone /> (+234) 8162482729</li>
<li className="flex items-center gap-2"><BsGeoAlt /> Anam Abak Midim Clan</li>
</ul>
</div>
</div>


<div className="mt-8 border-t border-orange-400 pt-6 text-sm flex flex-col md:flex-row justify-between gap-4">
<p>© {new Date().getFullYear()} Engr. Dandy George — All rights reserved.</p>
<div>
<Link to="#" className="mr-4">Terms</Link>
<Link to="#">Privacy</Link>
</div>
</div>
</div>
</footer>
)
}


export default Footer