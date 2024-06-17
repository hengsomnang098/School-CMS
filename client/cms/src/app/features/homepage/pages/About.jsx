import HexagonSection from "../components/About/HexagonSection";

const About = () => {
  return (
    <div>
      <div className="bg-yellow-200 p-8">
        <div>
          <div className="flex items-center mb-5">
            <div className="flex-grow   border-t-[6px] ml-8 border-black"></div>
            <h2 className="text-4xl font-bold mx-8 ">ABOUT US</h2>
            <div className="flex-grow border-t-[6px] mr-8 border-black"></div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <p className="text-gray-700 mb-6">
            Welcome to Southwest International School, a vibrant and diverse
            community dedicated to fostering academic excellence and holistic
            development. Nestled in the heart of [City/Location], our school is
            a beacon of learning that has been enlightening young minds since
            [Year of Establishment].
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Southwest International School, we believe in nurturing not just
            the academic but also the creative, physical, and emotional aspects
            of our students’ growth. Our mission is to provide a balanced
            education that equips our students with the skills and knowledge to
            thrive in an ever-changing world.
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            To be a leading educational institution recognized for its
            innovative teaching methods, inclusive environment, and commitment
            to producing responsible global citizens.
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              Excellence: We strive for the highest standards in all our
              endeavors.
            </li>
            <li>Integrity: Honesty and ethical behavior guide our actions.</li>
            <li>
              Respect: We foster an atmosphere of mutual respect and
              appreciation for diverse perspectives.
            </li>
            <li>
              Community: Collaboration and teamwork are at the heart of our
              community.
            </li>
            <li>
              Innovation: We encourage creativity and critical thinking to solve
              complex challenges.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">Our Facilities</h2>
          <p className="text-gray-700 mb-6">
            [School Name] boasts state-of-the-art facilities, including modern
            classrooms, science and computer labs, a well-stocked library,
            sports complexes, and performing arts spaces. These resources
            support our dynamic curriculum and extracurricular programs,
            providing students with ample opportunities to explore their
            interests.
          </p>

          <h2 className="text-2xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our dedicated faculty and staff are the heart of our school. With a
            passion for teaching and a commitment to student success, they
            create a supportive and engaging learning environment.
          </p>

          <p className="text-gray-700 mb-6">
            Join Us: We invite you to become a part of the [School Name] family,
            where every day is a journey of discovery, and every student is
            valued and empowered to reach their full potential.
          </p>
        </div>
      </div>
      <div className="h-auto bg-green-100">
        <HexagonSection />
      </div>
    </div>
  );
};

export default About;
