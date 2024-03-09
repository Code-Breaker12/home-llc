import { cloudData } from "../../data/cloud-data";
const Cloud = () => {
    const data = cloudData(); 
    console.log(data?.tempratureData)
  return (
    <div className="flex justify-evenly">
        {data?.tempratureData?.map((cloud)=><div key={cloud.id}>
            <p>{cloud.time}</p>
            <span>{cloud.icon}</span>
            <p>{cloud.date}</p>
        </div>)}
    </div>
  )
}

export default Cloud;