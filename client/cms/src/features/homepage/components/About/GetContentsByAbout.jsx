import React from "react";
import { useInView } from "react-intersection-observer";

const GetContentsByAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <div>
          <p className="text-lg text-center leading-relaxed">
            Welcome to Southwest International School. At Southwest
            International School, we are committed to nurturing the minds of
            tomorrow's leaders through excellence in education and a supportive
            learning environment. Our institution stands as a beacon of academic
            achievement, fostering a community where each student's potential is
            cultivated and celebrated. Mission Our mission at Southwest
            International School is to inspire a passion for learning, foster
            creativity, and empower students to become responsible global
            citizens.
          </p>
        </div>
      </div>
      <div className="flex flex-row max-w-screen-xl justify-between">
        <div
          ref={ref}
          className={`flex flex-col w-[550px] shadow-lg shadow-gray-900 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-green-700 h-auto transition-transform duration-500 ${
            inView ? "slice-in-left" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold">History and Legacy</h3>
          <p>
            Southwest International School was founded on the principles of
            academic rigor and community engagement. Since its establishment in
            [year of establishment], the school has grown into a distinguished
            institution known for its commitment to excellence and dedication to
            student development. Over the years, Southwest International School
            has built a rich history of providing quality education, nurturing
            critical thinkers, effective communicators, and compassionate
            leaders poised to make a positive impact on society. The legacy of
            the school is marked by its unique offerings, including a diverse
            range of academic programs designed to meet the needs of a
            globalized world. Our curriculum combines academic rigor with
            practical skills, preparing students for higher education and
            professional success. With a dedicated faculty of experienced
            educators, state-of-the-art facilities, and innovative teaching
            methodologies, we ensure personalized attention and support for each
            student on their educational journey.
          </p>
        </div>
        <div
          ref={ref}
          className={`flex flex-col w-[550px] shadow-lg shadow-gray-900 p-4 hover:scale-105 hover:shadow-2xl hover:shadow-green-700 h-auto transition-transform duration-500 ${
            inView ? "slice-in-right" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold">Envision</h3>
          <p>
            We strive to provide a rigorous and comprehensive education that
            prepares students for success in a rapidly changing world. Vision
            With a vision to be a leading institution of educational excellence,
            Southwest International School aims to cultivate a culture of
            continuous improvement and innovation. Student-Centered Approach At
            Southwest International School, students are at the heart of
            everything we do. We encourage intellectual curiosity, creativity,
            and critical thinking through a variety of extracurricular
            activities, clubs, and community service initiatives. Our aim is to
            provide a holistic education that nurtures both academic excellence
            and personal growth. Community Engagement We believe in the
            importance of fostering strong partnerships with parents, alumni,
            and the wider community. Through collaborative efforts and outreach
            programs, we aim to instill values of empathy, integrity, and social
            responsibility in our students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetContentsByAbout;
