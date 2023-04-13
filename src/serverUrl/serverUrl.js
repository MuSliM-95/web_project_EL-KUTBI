const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = "https://el-kutbi-backend.onrender.com"; 
} else {
  serverUrl = 'http://localhost:10000'
} 