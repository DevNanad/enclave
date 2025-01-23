import { useMutation } from "@tanstack/react-query"

import { loginUserApi } from "~api/user/user"

export const useLoginAuth = () => {
  // const { setuserData, setToken } = useUserAuthStore();
  return useMutation({
    mutationFn: loginUserApi,
    onSuccess: ({ data }) => {
      // setuserData({ username: context.username });
      // setToken(data.token);
    }
  })
}
