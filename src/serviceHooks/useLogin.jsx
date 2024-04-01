import axios from "axios";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { logIn } from "../store/user/userSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = useMutation(
    async (data) => {
      try {
        const response = await axios({
          url: "https://dummyjson.com/auth/login",
          method: "post",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            username: data?.email,
            password: data?.password,
          }),
        });
        return response;
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    {
      onSuccess: (data) => {
        data?.data && dispatch(logIn(data?.data));
        console.log(data?.data);
      },
    },
  );

  return handleLogin;
};
export default useLogin;
