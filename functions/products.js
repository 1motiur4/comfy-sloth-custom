const dotenv = require("dotenv");
dotenv.config();

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: "products route",
  };
};
