const { NODE_ENV } = process.env;

export let serverUrl;

if (NODE_ENV === "development") {
  serverUrl = "http://45.12.74.138:6001";
  // serverUrl = "https://el-kutbi-backend.onrender.com";
} else {
  serverUrl = "http://45.12.74.138:6001";
}
