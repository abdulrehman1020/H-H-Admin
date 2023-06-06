

import request from "./request";

export const createGroupApi = async (values) => {
  try {
    const { data } = await request.post("/group/create", values);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const updateRepresentative = async (values) => {
  try {
    const { data } = await request.patch(
      "/group/update-representative",
      values
    );
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const createRepresentative = async (values) => {
  try {
    const { data } = await request.post("/group/create-representative", values);
    console.log("🚀 ~ file: groupOnboading.ts:29 ~ createRepresentative ~ values:", values)
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const checkUserEmail = async (email) => {
  try {
    const { data } = await request.post("/auth/user-emails", {email});
    console.log("🚀 ~ file: groupOnboading.ts:38 ~ checkUserEmail ~ values:", email)
    return data.message;
  } catch (error) {
    console.error(error);
    return error.response.data.msg;
  }
}

export const createPayment = async (values) => {
  try {
    const { data } = await request.post("/payment/create-payment", values);
    console.log("🚀 ~ file: groupOnboading.ts:38 ~ checkUserEmail ~ values:", data)
    return data.message;
  } catch (error) {
    console.error(error);
    return error.response.data.msg;
  }
}