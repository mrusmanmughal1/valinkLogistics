import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../helpers/constants";

const getQuotations = async () => {
  const API = `${BASE_URL}quotation`;

  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
  };
  const res = await axios.get(API, config);
  return res;
};

export const useGetAllQuotations = () => {
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["admin-quotations"],
    queryFn: getQuotations,
  });
  return { data, isLoading, status, isError };
};
