import { Typography, Button } from "antd";
const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const CategoryHeader = ({ handleClickNew }) => {
  return (
    <>
      <Typography>
        <Title level={3}>Manage Category</Title>
      </Typography>
      <div className="flex 2xl:flex-row flex-col gap-2 justify-center size-16">
        <Button
          onClick={() => {
            handleClickNew();
          }}
          type="primary"
          size="large"
        >
          New
        </Button>
      </div>
    </>
  );
};

export default CategoryHeader;
