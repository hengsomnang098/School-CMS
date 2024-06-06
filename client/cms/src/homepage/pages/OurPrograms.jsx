import CategoryLists from "../components/CategoryList";

const OurPrograms = () => {
  return (
    <div>
      <div>
        <div className="py-40 bg-blue-300 text-gray-700">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 text-center">
            Our Program
          </h1>
          <div>
            <CategoryLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
