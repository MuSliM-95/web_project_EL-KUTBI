const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:6001'
} else {
  serverUrl = "https://el-kutbi-backend.onrender.com"; 
} 