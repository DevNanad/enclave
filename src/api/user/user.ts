import { axiosAuth } from "~api/axios"

export const loginUserApi = async (payload) => {
  return await axiosAuth.post("/auth/login", payload)
}
