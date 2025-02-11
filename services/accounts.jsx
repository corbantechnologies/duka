import { urlActions, urlMultipartActions } from "@/tools/api";

export const getUser = async (userId, axios) => {
  const response = await urlMultipartActions?.get(
    `/api/auth/${userId}/`,
    axios
  );

  return response?.data;
};

export const updateUser = async (userId, formData, axios) => {
  await urlMultipartActions?.patch(`/api/auth/${userId}/`, formData, axios);
};
