import React, { useState, useEffect } from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.jpg';
import banner3 from './assets/banner3.jpg';
import banner4 from './assets/banner4.jpg';
import banner5 from './assets/banner5.jpg';
import contact1 from './assets/contact1.jpeg';
import contact2 from './assets/contact2.jpeg';
import contact3 from './assets/contact3.jpeg';
import activity1 from './assets/activity1.jpg';
import activity2 from './assets/activity2.jpg';
import activity3 from './assets/activity3.jpg';
import mission1 from './assets/mission1.jpg';
import mission2 from './assets/mission2.jpg';
import mission3 from './assets/mission3.jpg';
import scheme1 from './assets/scheme1.jpg';
import scheme2 from './assets/scheme2.jpg';
import scheme3 from './assets/scheme3.jpg';
import heritage1 from './assets/heritage1.jpg';
import heritage2 from './assets/heritage2.jpg';
import heritage3 from './assets/heritage3.jpg';

const banners = [banner1, banner2, banner3, banner4, banner5];

function App() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-sans text-gray-800">
      <header className="bg-brown-700 text-white flex items-center p-4 shadow-md fixed w-full z-10">
        <h1 className="text-xl font-bold w-3/5 text-center">ZP School Thamgaon</h1>
      </header>

      <nav className="bg-gray-300 border-b border-gray-500 p-2 flex justify-center space-x-6 mt-14">
        <a href="#home" className="px-4 py-1 border rounded">Home</a>
        <a href="#activities" className="px-4 py-1 border rounded">Activities</a>
        <a href="#mission" className="px-4 py-1 border rounded">Mission</a>
        <a href="#schemes" className="px-4 py-1 border rounded">Schemes</a>
        <a href="#heritage" className="px-4 py-1 border rounded">Historical Heritage</a>
        <a href="#contact" className="px-4 py-1 border rounded">Contact</a>
      </nav>

      <section id="home" className="relative pt-16">
        <h2 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">Welcome to ZP School Thamgaon</h2>
        <Slider {...sliderSettings} className="w-full">
          {banners.map((banner, index) => (
            <div key={index}>
              <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </Slider>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold text-center">Contact Information</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4 text-center">
          {[{ img: contact1, name: 'John Doe', position: 'Principal' }, { img: contact2, name: 'Jane Smith', position: 'Vice Principal' }, { img: contact3, name: 'Alice Johnson', position: 'Administrator' }].map((contact, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md">
              <img src={contact.img} alt={contact.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
              <h3 className="font-semibold">{contact.name}</h3>
              <p>{contact.position}</p>
            </div>
          ))}
        </div>
      </section>

      {[{ id: 'activities', title: 'Activities', text: 'Our school organizes various cultural and educational activities to enhance students\' learning experience.', images: [activity1, activity2, activity3] }, { id: 'mission', title: 'Mission', text: 'We strive to provide quality education to all students, focusing on holistic development.', images: [mission1, mission2, mission3] }, { id: 'schemes', title: 'Schemes', text: 'We implement various government schemes to support students\' education and well-being.', images: [scheme1, scheme2, scheme3] }, { id: 'heritage', title: 'Historical Heritage', text: 'Our school takes pride in preserving the local cultural and historical heritage.', images: [heritage1, heritage2, heritage3] }].map((section) => (
        <section key={section.id} id={section.id} className="p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="md:w-1/2 border p-2 rounded-md">
            <Slider {...sliderSettings}>
              {section.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={section.title} className="w-full h-48 object-cover rounded-md" />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
