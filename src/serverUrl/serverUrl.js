const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:10000'
} else {
  serverUrl = "https://el-kutbi-backend.onrender.com"; 
}