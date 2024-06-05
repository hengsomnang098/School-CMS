import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const { id, nameEn, nameKh } = useParams();

  return (
    <div>
      <div>
        <div className="py-40 bg-yellow-300 text-gray-700">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
            Single Blog Page
          </h1>
        </div>
        {/* blog detail*/}
        <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
          <div className="lg:w-3/4 mx-auto ">
            {/* <img src={image} alt="" className="w-full mx-auto rounded " /> */}
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {id}
            </h2>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {nameKh}
            </h2>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
              {nameEn}
            </h2>
            {/* 
            <p className="text-base text-gray-500 mb-6 ">{content}</p> */}
            <div className="text-base text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                iure quisquam corporis sit consequatur eius veniam repellendus
                harum nemo molestias consectetur, ipsum repellat eaque earum
                blanditiis facere voluptatum alias voluptas facilis dolorem,
                excepturi magni ratione doloremque. Assumenda doloribus
                laudantium optio necessitatibus asperiores, illo fuga magnam
                velit animi saepe odit aspernatur!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                iure quisquam corporis sit consequatur eius veniam repellendus
                harum nemo molestias consectetur, ipsum repellat eaque earum
                blanditiis
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                iure quisquam corporis sit consequatur eius veniam repellendus
                harum nemo molestias consectetur, ipsum repellat eaque earum
                blanditiis facere voluptatum alias voluptas facilis dolorem,
                excepturi magni ratione doloremque. Assumenda doloribus
                laudantium optio necessitatibus asperiores, illo fuga magnam
                velit animi saepe odit aspernatur!
              </p>
              <br />
            </div>
          </div>
          <div className="lg:w1/2">{/* sidebar */}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
