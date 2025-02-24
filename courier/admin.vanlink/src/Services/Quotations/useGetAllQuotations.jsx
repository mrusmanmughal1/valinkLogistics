import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../helpers/constants";
import { useState } from "react";

const getQuotations = async (searchQuote, page) => {
  // /quotation/search?5213
  const API = `${BASE_URL}quotation`;

  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
    params: {
      search: searchQuote || undefined, // Adds 'search' param only if searchQuote is truthy
      pageNumber: page || 1, // Default page to 1 if not provided
    },
  };
  const res = await axios.get(API, config);
  return res;
};

export const useGetAllQuotations = (searchQuote) => {
  const [page, setpage] = useState(1);

  const next = () => {
    setpage((val) => val + 1);
  };
  const pre = () => {
    setpage((val) => val - 1);
  };
  const { data, isLoading, isError, status, isPending } = useQuery({
    queryKey: ["admin-quotations", searchQuote, page],
    queryFn: () => getQuotations(searchQuote, page),
  });
  return { data, isLoading, status, isError, isPending  , next ,pre ,page};
};
