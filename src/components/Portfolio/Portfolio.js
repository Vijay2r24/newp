import React, { useEffect } from 'react';
import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import MCDMF from "../../assets/images/mcdf.jpg";
import OurMissionImg2 from "../../assets/images/red.jpg";
import './portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';
import Loud from '../../assets/logo/loudstier.jpg';
import Geeks from '../../assets/logo/geeks.svg';
// import Focify from '../../assets/logo/focify.png';
import Sustaine from '../../assets/logo/sustaine.jpg';
import { GoArrowRight } from "react-icons/go";
import Real from '../../assets/images/realstateImg.jpg';
import 'aos/dist/aos.css';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Mantra from '../../assets/logo/MantraLabs.jpg';
import Trgt from '../../assets/images/Frame 1000004005.jpg';
import IdeaHub from '../../assets/images/idea.jpg';
import CMS from '../../assets/images/CMD.jpg';
import Nexa from '../../assets/logo/nexa.jpg';
import MCDMFlogo from '../../assets/images/Mcdmf1 (1).jpg';
import DA from '../../assets/images/DA-Application.png';
import eMb from '../../assets/images/iphone login screen.png'
import eMb2 from '../../assets/images/iphone 2.png'
import OneClick from '../../assets/images/oneClick.png';
import Imly from '../../assets/images/Imly.jpg';
import NimboBill from '../../assets/images/Nimbibill.png';
import NimboBill2 from '../../assets/images/nimbo_2.png';
import OneClick2 from '../../assets/images/Oneclick2.png';
import ManaMandiMb1 from '../../assets/images/login_manamandi.png'
import ManaMandiMb2 from '../../assets/images/manamandi_ (7).png'
import Smt from '../../assets/images/smt.png';
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const services = [
    {
      title: 'Web Development',
      description: ['Web Designing', 'e-Commerce website', 'Dynamic website'],
      imageUrl: require('../../assets/images/web1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'CMS Development',
      description: ['E-Commerce website', 'Content Management System', 'Customer Relationship Management'],
      imageUrl: require('../../assets/images/realstateimg1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-white',
    },
    {
      title: 'Mobile App Development',
      description: ['Android Apps', 'IOSs', 'Progressive Web Apps'],
      imageUrl: require('../../assets/images/mapp1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'Digital Marketing',
      description: ['SEO (Search Engine Optimization)', 'SMM (Social Media Marketing)', 'Branding'],
      imageUrl: require('../../assets/images/social1.jpg'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-black',
    },
    {
      title: 'UI/UX',
      description: ['Mobile App & Web UI/UX Design', 'Figma and related tools', 'UX Enhancements'],
      imageUrl: require('../../assets/images/uiux1.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#015177',
      textColor: 'text-white',
    },
    {
      title: 'Graphic Designing',
      description: ['Logo Designing', 'Social Media Post Designing', 'Web Banners, Visual Designing'],
      imageUrl: require('../../assets/images/grphic.png'),
      bgimage: require('../../assets/images/curveline.jpg'),
      bgColor: '#FFFF',
      textColor: 'text-black',
    },
  ];


  const Box = ({ title, description, icone, bgColor }) => (
    <div className="box text-white-500" style={{ backgroundColor: bgColor }}>
      <div className="icon-container">
        <img src={icone} alt={title} className="icone" />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
  return (
    <>
      <Front>
        <div className="contactheading">
          <h1>Portfolio</h1>
          <p>
            Welcome to B2Y, where innovation meets connectivity. We are thrilled
            to connect with you and explore how our expertise in IT solutions
            can empower your business.
          </p>
          <div className="contactbuttons">
            <button className="arrowbutton" onClick={handleButtonClick}>
              Portfolio
              <span className="arrowicon">
                <FaArrowDown />
              </span>
            </button>
          </div>
        </div>
      </Front>
      <div className="ourservices_section">
        <div className="ourservice container mx-auto px-4 py-6" data-aos="fade-up">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
            <b style={{ color: '#2e3192' }}>Our</b>
            <span style={{ color: '#20d3d3', marginLeft: '0.5rem' }}><b>Clients</b></span>
          </h1>
          <p className="text-xl sm:text-lg leading-relaxed text-center text-gray-600">
            A true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy.
            <br />
            The best and most productive relationships are synergistic and goal-oriented, and a long-term relationship has the value add of deep-rooted industry and company knowledge and relationships.
            <br />
          </p>
        </div>
      </div>
      <div className="box-container hidden sm:block">
        <Swiper
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Box className="hidden sm:block"
              title="Just Click Service"
              description="Food & Groceries Delivery Services"
              icone={Loud}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-Geeks'>
            <Box
              title="New Service"
              description="A new exciting service"
              icone={Geeks}
              bgColor=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <Box
              title="MCDMF"
              description="Expert Astrologist Website"
              icone={Sustaine}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide-Nexa'>
            <Box
              title="Astrology Offline"
              description="Expert Astrologist Website"
              icone={Nexa}
              bgColor=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="New Service"
              description="A new exciting service"
              icone={Trgt}
              bgColor=""
            >
            </Box>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="New Service"
              description="A new exciting service"
              icone={MCDMFlogo}
              bgColor=""
            >
            </Box>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-trgt">
            <Box
              title="Yadhumadi"
              description="Farmer & Nature Protection NGO"
              icone={Mantra}
              bgColor="box-bg-light-green" // Add custom class for background color if needed
            />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="container mx-auto p-4 lg:hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" data-aos="fade-up">
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={MCDMFlogo} alt="Client 1" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Mantra} alt="Client 2" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Loud} alt="Client 4" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Sustaine} alt="Client 5" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Nexa} alt="Client 6" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Trgt} alt="Client 7" className="w-full h-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <img src={Geeks} alt="Client 8" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
      <div className="storyContainer">
        <h1
          className="text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          <span style={{ color: '#2e3192' }}>Our </span>
          <span style={{ color: '#20d3d3' }}>Work</span>
        </h1>
        <p className="text-xl sm:text-lg leading-relaxed text-center text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
          Our team is currently working on a mobile app redesign aimed at improving user experience. We're using React Native for the frontend and Node.js for the backend. The project is progressing well, with initial wireframes completed and API integration underway.
        </p>

        <div className="cardSection flex flex-col-reverse md:flex-row-reverse bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={Real}
              alt="MCDMF"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">RealEstate</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Successfully developed a real estate app, combining intuitive design with robust features to enhance property search and user satisfaction.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Delivered a real estate app with a focus on innovation and user-centric design, ensuring a seamless experience for buyers and sellers alike.
            </p>
          </div>
        </div>
        <div className="cardSection reverse flex flex-col-reverse md:flex-row bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">E-Commerce</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Successfully launched an e-commerce platform, integrating modern design with seamless functionality to drive customer engagement and sales.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-right" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Delivered an e-commerce website with a focus on innovation and user-centric design, ensuring a standout shopping experience in a competitive market
            </p>
          </div>
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={OurMissionImg2}
              alt="E-Commerce"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="cardSection flex flex-col md:flex-row" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full md:w-3/4 h-96 md:h-auto">
            <img
              src={MCDMF}
              alt="MCDMF"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">MCDMF</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              We are thrilled to deliver the MCDMF website, crafted with precision and tailored to meet your unique needs.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Our team has ensured that the MCDMF website is not only visually stunning but also fully optimized for an exceptional user experience.
            </p>
          </div>
        </div>
        <div className="cardSection reverse flex flex-col-reverse md:flex-row bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">Idea Hub</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Java
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Groundbreaking ideas and innovative solutions, where creativity meets execution.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-right" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Ideahub's commitment to turning visionary concepts into reality.
            </p>
          </div>
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={IdeaHub}
              alt="E-Commerce"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="cardSection flex flex-col-reverse md:flex-row-reverse bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={CMS}
              alt="CMS"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">MultiTenant CMS</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                .Net
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Successfully developed a MultiTenant CMS, integrating seamless user management with customizable features to empower diverse clients and streamline content delivery.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Engineered a MultiTenant CMS, Developing customized dynamic websites through an intuitive admin interface, tailored to empower multi-tenant environments with ease.</p>
          </div>
        </div>
        <div className="cardSection reverse flex flex-col-reverse md:flex-row bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">DA Application
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.Js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Websockets
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                PostgreSQL
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Successfully developed a cutting-edge DA Learning Platform, offering seamless course access, video streaming, and real-time online classes, all while ensuring top-notch security with device registration restrictions.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-right" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Powered by React Native, React.js, Node.js, and PostgreSQL for a smooth and scalable experience."
            </p>
          </div>
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={DA}
              alt="E-Commerce"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="cardSection flex flex-col-reverse md:flex-row-reverse bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <img
              src={Imly}
              alt="CMS"
              className="storyimg transition-transform duration-300 ease-in-out hover:translate-y-5 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">InteriorSoft
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.Js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              React Native
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Developed Interior Design System, an ERP platform for interior designers to manage orders, payments, and clients.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Built with React Native (Mobile), React.js (Web), Node.js (Backend), and PostgreSQL (Database).</p>
          </div>
        </div>
        <div className="cardSection reverse flex flex-col-reverse md:flex-row bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">OneClick2Serve
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Angular
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                .NET Core
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL Server
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Docker
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Developed OneClick2Serve, a platform offering professional home and office services (e.g., cleaning, plumbing, painting).
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-right" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Integrated Razorpay for online payments and made the platform available on Android, iOS, and Web.
            </p>
          </div>
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <Swiper
              modules={[Autoplay]} // Add the Autoplay module
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000, // Faster scrolling
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  src={OneClick}
                  alt="CMS"
                  className="transition-all duration-500 ease-in-out hover:translate-y-5 w-full sm:w-auto md:w-3/4 lg:w-auto h-auto sm:h-64 md:h-72 lg:h-80 object-contain sm:object-cover md:object-contain rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={OneClick2}
                  alt="CMS"
                  className="transition-all duration-500 ease-in-out hover:translate-y-5 w-full sm:w-auto md:w-3/4 lg:w-auto h-auto sm:h-64 md:h-72 lg:h-80 object-contain sm:object-cover md:object-contain rounded-lg shadow-lg"
                />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
        <div className="cardSection flex flex-col-reverse md:flex-row-reverse bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full md:w-1/2 h-64 md:h-full">
            <Swiper
              modules={[Autoplay]} // Add the Autoplay module
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000, // Faster scrolling
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  src={NimboBill}
                  alt="CMS"
                  className="transition-all duration-500 ease-in-out hover:translate-y-5 w-full sm:w-auto md:w-3/4 lg:w-auto h-auto sm:h-64 md:h-72 lg:h-80 object-contain sm:object-cover md:object-contain rounded-lg border rounded-lg shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={NimboBill2}
                  alt="CMS"
                  className="transition-all duration-500 ease-in-out hover:translate-y-5 w-full sm:w-auto md:w-3/4 lg:w-auto h-auto sm:h-64 md:h-72 lg:h-80 object-contain sm:object-cover md:object-contain rounded-lg border rounded-lg shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">
              Nimboo Bill
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Flutter
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Angular
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                .NET Core
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                SQL Server
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Docker
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Developed NimbooBill, a smart POS billing app for restaurants that provides real-time financial insights, revenue tracking, and expense monitoring
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Available on Android, iOS, and Windows with offline support and sync functionality.
            </p>
          </div>
        </div>
        <div className="cardSection reverse flex flex-col-reverse md:flex-row bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">E-Commerce Mobile App
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React Native
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                Node.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              Android
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              IOS
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Enables users to browse, search, and purchase products online with ease. It features a user-friendly interface,
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-right" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
             Secure payment options, and personalized recommendations for a seamless shopping experience.
            </p>
          </div>
          <div className="port_img w-full h-auto flex flex-col sm:flex-row gap-4">
            <img
              src={eMb}
              alt="E-Commerce"
              className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[16rem] sm:h-[28rem] rounded-lg object-contain"
            />
            <img
              src={eMb2}
              alt="E-Commerce"
              className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[16rem] sm:h-[28rem] rounded-lg object-contain"
            />
          </div>
        </div>
        <div className="cardSection flex flex-col-reverse md:flex-row-reverse bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right" data-aos-delay="100">
          <div className="port_img w-full h-auto flex flex-col sm:flex-row gap-4">
            <img
              src={ManaMandiMb1}
              alt="E-Commerce"
              className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[16rem] sm:h-[28rem] rounded-lg object-contain"
            />
            <img
              src={ManaMandiMb2}
              alt="E-Commerce"
              className="transition-transform duration-300 ease-in-out hover:translate-y-5 w-full sm:w-1/2 h-[16rem] sm:h-[28rem] rounded-lg object-contain"
            />
          </div>
          <div className="portText w-full md:w-1/2 p-4">
            <h1 className="headding text-2xl font-bold text-white mb-4" data-aos="fade-right">
            Mana Mandi Mobile App
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                React Native
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
                .NET
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              Android
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300 w-auto">
              IOS
              </span>
            </div>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              Our Mobile app is designed to deliver seamless performance, solving complex problems with a user-friendly interface.
            </p>
            <p className="text-white flex items-start mb-4" data-aos="fade-left" data-aos-delay="200">
              <span className="text-white mt-1 mr-3 flex-shrink-0 text-sm md:text-base">
                <GoArrowRight />
              </span>
              With cutting-edge features and a commitment to excellence, it empowers users to achieve more with ease and efficiency.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6">
          {services.map((service, index) => {
            const isWhiteBg = service.bgColor === '#FFFF'; // Check if the background color is white
            const textColorClass = isWhiteBg ? 'text-black' : 'text-white'; // Set text color to black if background is white

            return (
              <div
                key={index}
                className={`relative p-4 sm:p-6 shadow-lg rounded-xl overflow-hidden ${textColorClass}`}
                style={{ backgroundColor: service.bgColor }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url(${service.bgimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                  }}
                ></div>
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    backgroundColor: service.bgColor,
                    opacity: 0.8,
                  }}
                ></div>
                <div className="relative z-20 mb-4">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-10 sm:w-[13%] border border-gray-400 object-cover"

                  />
                </div>
                <h3 className="relative z-20 text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                  {service.title}
                </h3>
                <ul className="relative z-20 space-y-2 sm:space-y-4">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 sm:mr-4 flex justify-center items-center w-5 h-5 sm:w-6 sm:h-6">
                        <ChevronRightIcon className="w-full h-full" />
                      </span>
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>

    </>
  );
};

export default Portfolio;
