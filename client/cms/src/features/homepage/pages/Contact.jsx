import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., sending the data to an API
    console.log("Form data submitted:", formData);
    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-yellow-100 py-12">
      <div>
        <div className="flex items-center mb-5">
          <div className="flex-grow   border-t-[6px] ml-8 border-black"></div>
          <h2 className="text-4xl font-bold mx-8 ">ABOUT US</h2>
          <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Any Comment</h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you! Whether you have a question about
                our school, admission process, or anything else, our team is
                ready to answer all your questions.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="p-6 bg-green-500 text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="mb-4 font-bold font-mono text-xl">
                SouthWest International School
              </p>
              <p className="mb-4">
                <strong>Address:</strong> Songkat 4, Sihanouk Provinces
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> +855 97 7777 555
              </p>
              <p className="mb-4">
                <strong>Email:</strong> southwestinternationalschool.com
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaFacebookF className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
