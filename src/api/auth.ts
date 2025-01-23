import axios from "axios"

// Use import.meta.env to load the variable
const apiUrl = process.env.PLASMO_PUBLIC_API_URL

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(
      `${apiUrl}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
    )

    return res
  } catch (err) {
    throw err
  }
}

export const registerUser = async (email: string, password: string) => {
  try {
    const res = await axios.post(
      `${apiUrl}/auth/register`,
      JSON.stringify({ email, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
    )
    return res
  } catch (err) {
    throw err
  }
}
