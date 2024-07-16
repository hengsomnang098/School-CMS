import React, { useState, useEffect } from "react";
import { fetchData } from "../api/Api";
import ContactForm from "../components/Contact/ContactForm";
import ContactInformation from "../components/Contact/ContactInformation";
import TitleComponent from "../components/Contact/TitleComponent";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [contact, setContact] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetchData("contents");

        if (response && Array.isArray(response.object)) {
          const contactData = response.object.find(
            (content) => content.article.name === "Contact"
          );

          if (contactData && contactData.id) {
            const contactDescription = await fetchData(
              `contents/${contactData.id}`
            );
            setContact(contactDescription?.object);
          }
        } else {
          console.error(
            "Unexpected response format or 'object' not found:",
            response
          );
        }
      } catch (error) {
        console.error("Error fetching contact information:", error);
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const subject = `Message from ${name} `;
    const body = `${message}`;
    const recipientEmail = "sce.shv@gmail.com";
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");
  };

  const description = contact?.description || "";
  const maxLengthDesc = 1800;
  const truncatedDescription =
    description.length > maxLengthDesc
      ? `${description.substring(0, maxLengthDesc)}...`
      : description;

  return (
    <div className="bg-yellow-100 py-12">
      <TitleComponent title="CONTACT US" />
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-200 shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              ref={ref}
              className={`p-6 transition-transform duration-2000 md:col-span-1 ${
                inView ? "slice-in-left" : "opacity-0"
              }`}
            >
              <h2 className="text-3xl text-center font-semibold mb-6">
                Any Comment
              </h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you! Whether you have a question about
                our school, admission process, or anything else, our team is
                ready to answer all your questions.
              </p>
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
            <ContactInformation
              truncatedDescription={truncatedDescription}
              className="md:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
