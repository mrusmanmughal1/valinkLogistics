"use client";
import { useState } from "react";
import SelectVehicle from "./SelectVehicle";
import EstimationUI from "@/UI/EstimationUI";
import CourierDetailsForm from "@/UI/CourierDetailsForm";
import { PostalCodeProvider } from "@/Context/PostalCodeContext";
import ResponseMessage from "@/UI/ResponseMessage";

const DymanicUI = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [Distance, setDIstance] = useState(null);
  return (
    <>
      <PostalCodeProvider>
        <section id="quote">
          {page == 1 && (
            <SelectVehicle
              setVehicle={setSelected}
              selected={selected}
              setDIstance={setDIstance}
              setPage={setPage}
            />
          )}
          {page == 2 && (
            <EstimationUI
              selected={selected}
              Distance={Distance}
              setPage={setPage}
            />
          )}
          {page == 3 && (
            <CourierDetailsForm setPage={setPage} selected={selected} />
          )}
            {page == 4 && (
            <ResponseMessage setPage={setPage} selected={selected} />
          )}
        </section>
      </PostalCodeProvider>
    </>
  );
};

export default DymanicUI;
