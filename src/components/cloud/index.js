// import { cloudData } from "../../data/cloud-data";
import {hourlyData} from "../../data/hourly-data";
const Cloud = () => {
    // const data = cloudData(); 
    // console.log(hourlyData);
    // console.log(data?.tempratureData)
  return (
    <div className="flex flex-wrap p-3 place-items-center justify-between">
        {/* {data?.tempratureData?.map((cloud)=><div key={cloud.id}>
            <p>{cloud.time}</p>
            <span>{cloud.icon}</span>
            <p>{cloud.date}</p>
        </div>)} */}
         {hourlyData?.list?.map((cloud)=><div key={cloud.dt} className="flex flex-col justify-between place-items-center">
            <p className="text-white font-abhaya text-center tracking-wide">{cloud.dt_txt}</p>
            <span className="">{cloud.icon}</span>
            <p className="text-white font-abhaya">{cloud?.weather?.[0]?.description}</p>
        </div>)}
    </div>
  )
}

export default Cloud;