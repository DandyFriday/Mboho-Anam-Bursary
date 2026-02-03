import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-[8rem]">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#065f46] text-white p-6 rounded-lg">
          <h3 className="text-xl mb-2">Contact Information</h3>
          <p className="mb-4">Say something to start a live chat!</p>
          <ul className="space-y-2">
            <li>Email: dandyfriday31@gmail.com</li>
            <li>Phone: (+234)8162482729</li>
            <li>Address: Ikot Akpan Essien, Oruk Anam</li>
          </ul>
        </div>

        <form className="p-6 bg-white rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" value={form.firstName} onChange={handle} placeholder="First Name" className="border-b p-2 outline-none" />
            <input name="lastName" value={form.lastName} onChange={handle} placeholder="Last Name" className="border-b p-2 outline-none" />
            <input name="email" value={form.email} onChange={handle} placeholder="Email" className="border-b p-2 outline-none" />
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone" className="border-b p-2 outline-none" />
            <textarea name="message" value={form.message} onChange={handle} placeholder="Message" className="col-span-1 md:col-span-2 border p-2 h-28" />
          </div>

          <div className="mt-4 text-right">
            <Button text="Send Message" className="bg-orange text-white" icon={<BsArrowRight />} />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;