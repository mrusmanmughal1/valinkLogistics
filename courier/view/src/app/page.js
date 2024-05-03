
import CourierDetailsForm from "@/UI/CourierDetailsForm"
import EstimationUI from "@/UI/EstimationUI"
import SilderMain from "@/UI/SilderMain"
import Hero from "@/components/Hero"
import SelectVehicle from "@/components/SelectVehicle"
 
const page = () => {
  return (
    <div>
        <Hero/>
        <SilderMain/>
        <SelectVehicle/>
        <EstimationUI/>
        <CourierDetailsForm/>
    </div>
  )
}

export default page