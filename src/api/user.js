import api from "."

export const getUserDetailsByEmail = (email) => {
  return api.post("/user/details", { email })
}