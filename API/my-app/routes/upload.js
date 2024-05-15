const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dhqiuvcw4",
  api_key: "785953993297427",
  api_secret: "9KreMp1-ngD1uvL9rZYgzbqmYhU", // Click 'View Credentials' below to copy your API secret
});
const file =
  "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg";

async function run() {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "image",
    });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run();
