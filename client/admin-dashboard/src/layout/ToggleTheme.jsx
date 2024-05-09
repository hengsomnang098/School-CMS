import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const ToggleTheme = ({ darkTheme, toggleTheme }) => {
  return (
    <div className=" absolute bottom-[30px] left-[20px] flex items-center justify-center text-base">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleTheme;
