import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../helpers/constants";

const getvans = async () => {
  const API = `${BASE_URL}vehicles/`;

  const res = await axios.get(API);
  return res;
};

export const useGetAllVans = () => {
  const { data, isLoading, isError, status, isPending } = useQuery({
    queryKey: ["all-vans"],
    queryFn: () => getvans(),
  });
  return { data, isLoading, status, isError, isPending };
};
