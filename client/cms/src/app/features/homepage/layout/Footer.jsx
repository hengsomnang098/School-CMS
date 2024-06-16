import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import GoogleMapComponent from "../components/GoogleMap/GoogleMapComponent";
const Footer = () => {
  return (
    <div className="text-white py-5 bg-[#0C3B2E]">
      <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-5">
          <div className="grid grid-cols-2 gap-5  lg:col-span-3 md:grid-cols-3">
            <div className="border-r border-gray-500 text-white">
              <p className="font-bold text-2xl mb-5 tracking-wide ">About Us</p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href="/"
                    className="text-xl flex  transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex  transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex  transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    World
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-r border-gray-500">
              <p className="font-bold text-2xl mb-5 tracking-wide  text-white">
                Resource
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-xl flex   transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex   transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Admission
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex   transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    World
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-r border-gray-500">
              <p className="font-bold text-2xl mb-5 tracking-wide text-white ">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2 text-white ">
                <li>
                  <a
                    href="/"
                    className="text-xl flex   transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex  transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Sales
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex   transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xl flex  transition-colors duration-300 hover:text-yellow-300"
                  >
                    <FaLink className="mr-2 h-7" />
                    World
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:max-w-md text-2xl text-white mb-5 ml-5 lg:col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide flex ">
              <FaLocationCrosshairs className="mr-2 h-9 text-red-500" />
              South West International School
            </p>

            <div className="mt-4 flex flex-col md:flex-row">
              {/* <GoogleMapComponent /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.3808316854787!2d103.53486499919738!3d10.616392200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107e1f28dd34fc5%3A0xb03c596df9e1a956!2sSouthwest%20International%20School!5e0!3m2!1skm!2skh!4v1717726521139!5m2!1skm!2skh"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="border-0 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5  border-t border-gray-500 sm:flex-row">
          <p></p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-white">
            <a
              href=""
              className=" transition-all duration-300 hover:text-teal-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className=" transition-all duration-300 hover:text-blue-600"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href=""
              className=" transition-all duration-300 hover:text-pink-400"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
