"use client";
import { useState } from "react";

import React from "react";
import SelectVehicle from "./SelectVehicle";
import EstimationUI from "@/UI/EstimationUI";
import CourierDetailsForm from "@/UI/CourierDetailsForm";

const DymanicUI = () => {
  const [selected, setSelected] = useState(null);
  const [Distance, setDIstance] = useState(null);
  const [showform, setform] = useState(true);

  const [ProcessToForm, setProcessToForm] = useState(false);

  const distanceValue = parseInt(Distance?.match(/\d+/)[0], 10);
  return (
    <div>
      {!distanceValue && (
        <SelectVehicle
          setVehicle={setSelected}
          selected={selected}
          setDIstance={setDIstance}
        />
      )}
      {distanceValue  && showform ? (
        <EstimationUI setProcessToForm={setProcessToForm}  setform={setform}/>
      ) : null}
      {ProcessToForm && <CourierDetailsForm />}
    </div>
  );
};

export default DymanicUI;
