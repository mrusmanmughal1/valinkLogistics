
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
    </div>
  )
}

export default page