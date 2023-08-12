require("dotenv").config();
const config = {
    key : process.env.KEY || "gofksofka",
    port : process.env.PORT || 3000,
    serverIp : process.env.SERVER_IP || "12.53.45.6",
    dataPath: process.env.DATA_PATH || "current_status/"
}

module.exports = {
    config,
  };