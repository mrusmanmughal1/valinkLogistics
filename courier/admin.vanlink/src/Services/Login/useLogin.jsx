import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../helpers/constants";
const getLogin = async (credentials) => {
  console.log(credentials);
  const Post = `${BASE_URL}auth`;
  const res = await axios.post(Post, credentials);
  return res;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials) => getLogin(credentials),
    onSuccess: (data) => {
      console.log(data);
      const token = data.data.accessToken;

      // setting Tokken and UserData to DB
      localStorage.setItem("Token", token);

      // Navigate based on user type
      const destination = "/admin/dashboard";
      navigate(destination, { replace: true });

      // on success toast
      toast.success("Welcome ! You Are Logged In ");
    },

    // Handle Error
    onError: (err) => {
      const errorMessage =
        err.response?.data?.error || err.message || "Please Try Again Later!";
      toast.error("Invalid Credential ");
    },
  });

  return { mutate, isPending };
};
