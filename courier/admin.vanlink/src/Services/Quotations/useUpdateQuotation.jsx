import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../../helpers/constants";
const updateQuote = async (Update) => {
  const API = `${BASE_URL}quotation/`;


  const req = await axios.patch(API, Update);
  return req;
};
export const useUpdateQuotation = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updateQuote,
    onSuccess: (res) => {
      toast.success("Job Updated successfully! Your listing is now live");
      queryClient.invalidateQueries(["admin-quotations"]);
    },
    onError: (err) => {
      console.log(err)
      const errorMessage =
        "There was an error While Updating your job. Please try again.";

      toast.error(errorMessage, { id: "job-id" });
    },
  });

  return { mutate, isPending, isError, error };
};
