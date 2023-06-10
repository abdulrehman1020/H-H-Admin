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
