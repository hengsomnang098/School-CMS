import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-bold font-robot text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label className="block font-bold font-robot text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-200"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
