"use client";
import { useState } from "react";

import React from "react";
import SelectVehicle from "./SelectVehicle";
import EstimationUI from "@/UI/EstimationUI";
import CourierDetailsForm from "@/UI/CourierDetailsForm";

const DymanicUI = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [Distance, setDIstance] = useState(null);

  return (
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
    </section>
  );
};

export default DymanicUI;