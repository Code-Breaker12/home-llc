// import { cloudData } from "../../data/cloud-data"
const AdditionalInfo = ({mapWeatherData}) => {
    // const data = cloudData(); 
  return (
    <>
    <p className="font-abhaya font-bold text-xl text-left mt-6 tracking-wide text-slate-950 border-t border-gray-300 pt-8">Additional Info</p>
    <div className="flex w-100 place-items-center justify-between border-b border-gray-300 ">
    {mapWeatherData?.additionalInfo?.map((item) =>
    <div key={item.id}>
        <p className="font-abhaya tracking-wide text-gray-400 pt-4">{item.heading}</p>
        <p className="pb-8">{item.percentage}</p>
    </div> 
    )}
    </div>
    </>
    )
}

export default AdditionalInfo