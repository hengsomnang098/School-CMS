import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { Button } from "antd";

// eslint-disable-next-line react/prop-types
const ToggleTheme = ({ darkTheme, toggleTheme }) => {
  return (
    <>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </>
  );
};

export default ToggleTheme;
