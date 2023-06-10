import axios from 'axios'

const request = axios.create({
    baseURL:  'http://localhost:8080/api',
    withCredentials: true,
})

function setAuthorizationHeader() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWU5ZjBlZGM0YTA0NWQyYWM3ZmEzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTc4NDcwNCwiZXhwIjoxNjg3MDgwNzA0fQ.RMubpMSRK_OZZpLvFOlfe6VRR9o0vozLE5CTi4WuB2E";
    if (token !== null) {
      request.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  
  // Set the Authorization header immediately if the token is available
  setAuthorizationHeader();

export default request