import request from "./request";


export const login = async (values) => {
  try {
    const result = await request.post("/auth/login", values);
    
    // localStorage.setItem("auth-token", result.data.token);
    localStorage.setItem("login-user", result.data.user);
    console.log("🚀 ~ file: auth.ts:12 ~ login ~ result:", result.data.user)
    return result;
  } catch (error) {
    console.log("🚀 ~ file: auth.ts:24 ~ login ~ error:", error);
    return error.response;
  }
};
export const registerUser = async (values) => {
  try {
    const response = await request.post("/auth/register", values);
    console.log("🚀 ~ file: auth.ts:25 ~ registerUser ~ data:", response);

    return response.data;
    // await request.post("/auth/register", values)
    //  .then(res => console.log(res.data.message))
    //  .catch(err => console.log(err.response))
  } catch (error) {
    // if (error.response) {
    //   console.log(error.response.data, "working");
    //   return error.response.data;
    //   // handle server error response
    // } else {
    //   console.error(error);
    //   // handle other types of errors
    // }
    throw new Error(
      error.response.data || "Registration failed. Please try again."
    );
  }
};
