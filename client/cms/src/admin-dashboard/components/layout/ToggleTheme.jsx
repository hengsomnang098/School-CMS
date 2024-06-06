import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const ToggleTheme = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="item-center justify-center w-full h-full pl-5 pb-4">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleTheme;
