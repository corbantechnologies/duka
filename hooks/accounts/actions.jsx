"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../general/useAxiosAuth";
import useUserId from "../general/useUserId";
import { getUser } from "@/services/accounts";

export function useFetchUser() {
  const userId = useUserId();
  const axios = useAxiosAuth();

  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId, axios),
  });
}
