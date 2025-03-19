import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../helpers/constants";
import { useState } from "react";

const getQuotations = async (searchQuote, page) => {
  const { quoteJobStatus, quoteNum, quotePayStatus, startDate, endDate } =
    searchQuote;
  const API = `${BASE_URL}quotation/`;
  const Token = localStorage.getItem("Token");

  const config = {
    headers: {
      Authorization: `Token ${Token}`,
    },
    params: {}, // Initialize an empty params object
  };

  // Dynamically add query parameters only if they have truthy values
  if (quoteJobStatus) {
    if (quoteJobStatus == "All") {
      config.params.quoteJobStatus = "";
    } else {
      config.params.quoteJobStatus = quoteJobStatus;
    }
  }

  if (quoteNum) {
    config.params.quoteNum = quoteNum;
  }

  if (quotePayStatus) {
    config.params.quotePayStatus = quotePayStatus;
  }

  if (page) {
    config.params.page = page;
  }
  if (startDate) {
    config.params.startDate = startDate;
  }
  if (endDate) {
    config.params.endDate = endDate;
  }

  const res = await axios.get(API, config);
  return res;
};

export const useGetAllQuotations = (searchQuote) => {
  const [page, setpage] = useState(1);

  const next = () => {
    setpage((val) => val + 1);
  };
  const pre = () => {
    if (page !== 1) {
      setpage((val) => val - 1);
    }
  };
  const { data, isLoading, isError, status, isPending } = useQuery({
    queryKey: ["admin-quotations", searchQuote, page],
    queryFn: () => getQuotations(searchQuote, page),
  });
  return { data, isLoading, status, isError, isPending, next, pre, page };
};
