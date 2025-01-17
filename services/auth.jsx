import axios from "axios"

export const googleAuthenticate = async (values) => {
    const response = await axios?.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/google/login/`, values);
    return response
}