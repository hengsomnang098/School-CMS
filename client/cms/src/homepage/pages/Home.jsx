import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-12 bg-gray-300 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to School Name</h2>
          <p className="text-lg mb-8">Education</p>
          <a
            href="/contact"
            className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-200"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-8">
            Brief description about the school and its mission.
          </p>
          {/* Add more details about the school */}
        </div>
      </section>

      {/* Programs section */}
      <section id="programs" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          {/* Add information about various programs offered */}
        </div>
      </section>

      {/* Admissions section */}
      <section id="admissions" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Admissions</h2>
          {/* Add information about admissions process, requirements, etc. */}
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-12 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* Add contact information and a contact form */}
        </div>
      </section>
    </div>
  );
};

export default Home;
